import os
import math
import struct
import wave
import subprocess

OUT_DIR = "public/videos"
os.makedirs(OUT_DIR, exist_ok=True)

def generate_wav(filepath, duration_sec, bpm=124, key=261.63, style="saas"):
    sample_rate = 44100
    total_samples = int(sample_rate * duration_sec)
    beat_sec = 60.0 / bpm
    
    # Scale notes (Major or Minor)
    if style in ["corporate", "swisscom"]:
        # C Major / G Major peaceful
        scale = [key * (2 ** (n / 12)) for n in [0, 4, 7, 11, 12, 16, 19]]
        chord_sets = [
            [scale[0], scale[2], scale[4]],
            [scale[3], scale[5], scale[1]],
            [scale[4], scale[6], scale[2]],
            [scale[0], scale[2], scale[4]],
        ]
    elif style in ["dramatic", "doc"]:
        # Minor
        scale = [key * (2 ** (n / 12)) for n in [0, 3, 7, 8, 10, 12, 15]]
        chord_sets = [
            [scale[0], scale[2], scale[4]],
            [scale[3], scale[5], scale[1]],
            [scale[2], scale[4], scale[6]],
            [scale[1], scale[3], scale[5]],
        ]
    else:
        # Modern Upbeat SaaS
        scale = [key * (2 ** (n / 12)) for n in [0, 2, 4, 7, 9, 12, 14, 16]]
        chord_sets = [
            [scale[0], scale[2], scale[4]],
            [scale[4], scale[6], scale[1]],
            [scale[3], scale[5], scale[0]],
            [scale[1], scale[3], scale[5]],
        ]

    with wave.open(filepath, 'w') as wav:
        wav.setnchannels(2)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        
        frames = bytearray()
        for i in range(total_samples):
            t = i / sample_rate
            measure = int(t / (beat_sec * 4))
            chord = chord_sets[measure % len(chord_sets)]
            
            # Bassline
            bass_freq = chord[0] * 0.5
            bass_env = max(0.0, 1.0 - ((t % beat_sec) / beat_sec) * 0.7)
            bass = 0.22 * math.sin(2 * math.pi * bass_freq * t) * bass_env
            
            # Lush Warm Pad
            pad = 0.12 * sum(math.sin(2 * math.pi * f * t) for f in chord)
            
            # Arpeggiator Lead
            sub_beat = int(t / (beat_sec / 2))
            note = chord[sub_beat % len(chord)] * (2.0 if sub_beat % 4 == 3 else 1.0)
            arp_phase = (t % (beat_sec / 2)) / (beat_sec / 2)
            arp_env = max(0.0, 1.0 - arp_phase * 1.5)
            lead = 0.18 * math.sin(2 * math.pi * note * t + 0.1 * math.sin(2 * math.pi * 5 * t)) * arp_env
            
            # Rhythm: Kick drum on each beat
            beat_pos = (t % beat_sec) / beat_sec
            kick_env = max(0.0, 1.0 - beat_pos * 5.0) ** 2
            kick = 0.3 * math.sin(2 * math.pi * (60 * (1.0 - beat_pos)) * t) * kick_env
            
            # Hi-Hat
            hat_pos = ((t + beat_sec * 0.5) % beat_sec) / beat_sec
            hat_env = max(0.0, 1.0 - hat_pos * 10.0)
            hat = 0.06 * (math.sin(2 * math.pi * 4200 * t) + math.sin(2 * math.pi * 8400 * t)) * hat_env
            
            total = (bass + pad + lead + kick + hat) * 0.75
            total = max(-0.95, min(0.95, total))
            val = int(total * 32767)
            frames.extend(struct.pack('<hh', val, val))
            
        wav.writeframes(frames)

VIDEOS = [
    {
        "id": "saas_papers",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 12,
        "style": "saas",
        "bg_color": "#0F172A",
        "accent": "#FACC15",
        "title": "+Papers",
        "subtitle": "Company Creation & Accounting Automation",
        "badge": "@vhglobals SaaS Suite",
        "k1": "All your company data in one unified place",
        "k2": "Instant Invoice & Receipt OCR Processing",
        "k3": "100% Tax & Legal Compliance Guaranteed"
    },
    {
        "id": "saas_langease",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 12,
        "style": "saas",
        "bg_color": "#0B192C",
        "accent": "#38BDF8",
        "title": "LangEase",
        "subtitle": "AI Multi-Language Video Localization",
        "badge": "langease.ai Platform",
        "k1": "Localize any content in under 30 seconds",
        "k2": "Automatic multi-language voiceovers & subs",
        "k3": "Zero manual editing - Expand globally today"
    },
    {
        "id": "saas_pitch",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 12,
        "style": "saas",
        "bg_color": "#1E1B4B",
        "accent": "#60A5FA",
        "title": "Pitch",
        "subtitle": "Next-Gen Career & Talent Network",
        "badge": "Hire Effortlessly",
        "k1": "Dynamic video profiles & 1-click screening",
        "k2": "Over 1,194+ active tech jobs available",
        "k3": "Connect directly with mentors & recruiters"
    },
    {
        "id": "saas_swisscom",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 12,
        "style": "corporate",
        "bg_color": "#18181B",
        "accent": "#EF4444",
        "title": "Swisscom Sign",
        "subtitle": "Qualified Electronic Signature (QES)",
        "badge": "swisscom.ch/business-sign",
        "k1": "The better way to sign: Quick, Easy, Anywhere",
        "k2": "Legally valid electronic signatures across devices",
        "k3": "100% Digital - Maximum Security - Swiss Made"
    },
    {
        "id": "saas_cludio",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 12,
        "style": "saas",
        "bg_color": "#1E1035",
        "accent": "#A855F7",
        "title": "Cludio CRM",
        "subtitle": "Client Workflow, Invoicing & Project Hub",
        "badge": "@vhglobals CRM",
        "k1": "End spreadsheet and email chaos today",
        "k2": "One-click proposal & automated invoice generation",
        "k3": "Real-time client revenue pipeline & analytics"
    },
    {
        "id": "saas_hubspot",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 12,
        "style": "saas",
        "bg_color": "#1C1917",
        "accent": "#FB923C",
        "title": "HubSpot",
        "subtitle": "Connected CRM, Insights & Sales Engine",
        "badge": "Grow Better",
        "k1": "Slack, Gmail & Drive fully connected into HubSpot",
        "k2": "Complete contact insights & deal pipeline tracking",
        "k3": "Work smarter - Close deals faster"
    },
    # Real Estate
    {
        "id": "real_estate_vertical",
        "aspect": "9:16",
        "w": 540, "h": 960,
        "duration": 10,
        "style": "saas",
        "bg_color": "#022C22",
        "accent": "#34D399",
        "title": "Beverly Hills Villa",
        "subtitle": "9:16 Luxury Architectural Tour",
        "badge": "Real Estate Vertical (9:16)",
        "k1": "$14,500,000 Sunset Strip Residence",
        "k2": "FPV Drone flythrough & infinity pool reveal",
        "k3": "High-retention Reels & TikTok pacing"
    },
    {
        "id": "real_estate_horizontal",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 10,
        "style": "corporate",
        "bg_color": "#042F2E",
        "accent": "#2DD4BF",
        "title": "Waterfront Estate",
        "subtitle": "16:9 Cinematic Property Film",
        "badge": "Real Estate Master Tour (16:9)",
        "k1": "Architectural Waterfront Showcase",
        "k2": "4K DCI Stabilization & Anamorphic Grading",
        "k3": "Engineered for YouTube & Luxury MLS"
    },
    # Documentary
    {
        "id": "doc_vertical",
        "aspect": "9:16",
        "w": 540, "h": 960,
        "duration": 10,
        "style": "dramatic",
        "bg_color": "#261501",
        "accent": "#F59E0B",
        "title": "Silicon Valley Heist",
        "subtitle": "9:16 Investigative Micro-Doc",
        "badge": "Documentary Storytelling (9:16)",
        "k1": "The Untold 1999 Semiconductor Scandal",
        "k2": "2.5D Photo Parallax & Archival Paper Textures",
        "k3": "Engineered for 78% 30-sec retention hook"
    },
    {
        "id": "doc_horizontal",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 10,
        "style": "dramatic",
        "bg_color": "#1C1917",
        "accent": "#D97706",
        "title": "Titan of Industry",
        "subtitle": "16:9 Archival Feature Film",
        "badge": "Documentary Long-Form (16:9)",
        "k1": "The Rise and Fall of the Atlantic Railroad",
        "k2": "Original Newspaper Headlines & Audio Restoration",
        "k3": "Cinematic pacing for YouTube long-form channels"
    },
    # Talking Head
    {
        "id": "talking_vertical",
        "aspect": "9:16",
        "w": 540, "h": 960,
        "duration": 10,
        "style": "saas",
        "bg_color": "#1E1E2E",
        "accent": "#EC4899",
        "title": "Founder Secrets",
        "subtitle": "9:16 High-Authority Insight Short",
        "badge": "Talking Head (9:16)",
        "k1": "How we scaled to $10M ARR in 14 months",
        "k2": "Kinetic subtitles & multi-cam jump punch-ins",
        "k3": "Retention optimized for Shorts & Reels"
    },
    {
        "id": "talking_horizontal",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 10,
        "style": "corporate",
        "bg_color": "#172554",
        "accent": "#60A5FA",
        "title": "Executive Keynote",
        "subtitle": "16:9 Studio Master Podcast",
        "badge": "Talking Head (16:9)",
        "k1": "Deep dive discussion on Autonomous AI Systems",
        "k2": "Color graded multi-cam switching with sound design",
        "k3": "Zero fluff, broadcast-standard dynamic pacing"
    },
    # Geo Layer
    {
        "id": "geo_vertical",
        "aspect": "9:16",
        "w": 540, "h": 960,
        "duration": 10,
        "style": "saas",
        "bg_color": "#064E3B",
        "accent": "#10B981",
        "title": "Maritime Chokepoint",
        "subtitle": "9:16 Satellite Route Animation",
        "badge": "Geo Layer 3 (9:16)",
        "k1": "Strait of Malacca Global Trade Route Breakdown",
        "k2": "3D Satellite Elevation & Custom Topography",
        "k3": "Fast-paced geopolitical motion map"
    },
    {
        "id": "geo_horizontal",
        "aspect": "16:9",
        "w": 960, "h": 540,
        "duration": 10,
        "style": "corporate",
        "bg_color": "#082F49",
        "accent": "#38BDF8",
        "title": "Global Supply Corridors",
        "subtitle": "16:9 4K GeoLayer Master Film",
        "badge": "Geo Layer 3 (16:9)",
        "k1": "Trans-Continental Trade & Freight Trajectories",
        "k2": "True 3D Earth Curvature & Camera Motion Tracking",
        "k3": "Broadcast documentary cartography standard"
    }
]

def render_video(v):
    mp4_path = os.path.join(OUT_DIR, f"{v['id']}.mp4")
    wav_path = os.path.join(OUT_DIR, f"{v['id']}.wav")
    
    # 1. Generate audio WAV
    generate_wav(wav_path, v["duration"], bpm=126, style=v["style"])
    
    font_path = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
    
    w = v["w"]
    h = v["h"]
    dur = v["duration"]
    
    # Construct complex visual filter with animated texts, boxes, and pulsing progress bar
    # 3 phases of text in the video:
    # 0s - 4s: Title + subtitle + k1
    # 4s - 8s: Title + subtitle + k2
    # 8s - end: Title + subtitle + k3
    
    filters = [
        f"color=c={v['bg_color']}:s={w}x{h}:d={dur}[bg]",
        # Card container box
        f"[bg]drawbox=x={int(w*0.08)}:y={int(h*0.12)}:w={int(w*0.84)}:h={int(h*0.76)}:color=white@0.08:t=fill[b1]",
        f"[b1]drawbox=x={int(w*0.08)}:y={int(h*0.12)}:w={int(w*0.84)}:h={int(h*0.76)}:color={v['accent']}@0.7:t=4[b2]",
        
        # Badge
        f"[b2]drawbox=x={int(w*0.12)}:y={int(h*0.16)}:w={int(w*0.76)}:h={int(h*0.09)}:color={v['accent']}@0.2:t=fill[b3]",
        f"[b3]drawtext=fontfile={font_path}:text='{v['badge']}':fontcolor={v['accent']}:fontsize={int(h*0.045)}:x=(w-text_w)/2:y={int(h*0.18)}[t0]",
        
        # Title
        f"[t0]drawtext=fontfile={font_path}:text='{v['title']}':fontcolor=white:fontsize={int(h*0.085)}:x=(w-text_w)/2:y={int(h*0.28)}[t1]",
        
        # Subtitle
        f"[t1]drawtext=fontfile={font_path}:text='{v['subtitle']}':fontcolor=white@0.8:fontsize={int(h*0.048)}:x=(w-text_w)/2:y={int(h*0.39)}[t2]",
        
        # Dynamic Bullet 1 (0s - 4s)
        f"[t2]drawtext=fontfile={font_path}:text='▶ {v['k1']}':fontcolor={v['accent']}:fontsize={int(h*0.046)}:x=(w-text_w)/2:y={int(h*0.52)}:enable='between(t,0,4)'[t3]",
        
        # Dynamic Bullet 2 (4s - 8s)
        f"[t3]drawtext=fontfile={font_path}:text='▶ {v['k2']}':fontcolor={v['accent']}:fontsize={int(h*0.046)}:x=(w-text_w)/2:y={int(h*0.52)}:enable='between(t,4,8)'[t4]",
        
        # Dynamic Bullet 3 (8s - dur)
        f"[t4]drawtext=fontfile={font_path}:text='▶ {v['k3']}':fontcolor={v['accent']}:fontsize={int(h*0.046)}:x=(w-text_w)/2:y={int(h*0.52)}:enable='gte(t,8)'[t5]",
        
        # Footer watermark
        f"[t5]drawtext=fontfile={font_path}:text='High-Retention Video Production':fontcolor=white@0.5:fontsize={int(h*0.035)}:x=(w-text_w)/2:y={int(h*0.72)}[t6]",
        
        # Animated Progress Bar at bottom of card
        f"[t6]drawbox=x={int(w*0.12)}:y={int(h*0.80)}:w='min({int(w*0.76)}, {int(w*0.76)}*t/{dur})':h={int(h*0.02)}:color={v['accent']}:t=fill[v_out]"
    ]
    
    vf = ";".join(filters)
    
    cmd = [
        "ffmpeg", "-y",
        "-i", wav_path,
        "-filter_complex", vf,
        "-map", "[v_out]",
        "-map", "0:a",
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "128k",
        "-t", str(dur),
        mp4_path
    ]
    
    print(f"Rendering {v['id']} ({v['aspect']})...")
    subprocess.run(cmd, check=True)
    if os.path.exists(wav_path):
        os.remove(wav_path)
    print(f"Finished {v['id']}.mp4 ({os.path.getsize(mp4_path)} bytes)")

def main():
    for v in VIDEOS:
        render_video(v)
    print("All portfolio videos generated successfully!")

if __name__ == "__main__":
    main()
