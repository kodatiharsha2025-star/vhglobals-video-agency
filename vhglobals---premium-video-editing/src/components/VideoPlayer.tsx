import { useState, useRef, useEffect, type ChangeEvent } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  CheckCircle2, 
  Activity
} from 'lucide-react';
import { AspectRatio } from '../types';

interface VideoPlayerProps {
  id: string;
  title: string;
  aspectRatio: AspectRatio;
  videoSrc: string;
  fallbackPoster: string;
  nicheLabel: string;
}

export default function VideoPlayer({
  id,
  title,
  aspectRatio,
  videoSrc,
  fallbackPoster,
  nicheLabel
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:30');
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = aspectRatio === '9:16';

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(true);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 30;
    setProgress((current / total) * 100);
    setCurrentTime(formatTime(current));
    setDuration(formatTime(total));
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetValue = parseFloat(e.target.value);
    const total = videoRef.current.duration || 30;
    const seekTime = (targetValue / 100) * total;
    videoRef.current.currentTime = seekTime;
    setProgress(targetValue);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  const cycleSpeed = () => {
    if (!videoRef.current) return;
    const speeds = [1, 1.25, 1.5, 2];
    const nextIndex = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const newSpeed = speeds[nextIndex];
    videoRef.current.playbackRate = newSpeed;
    setPlaybackSpeed(newSpeed);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={`player-wrapper-${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full rounded-2xl overflow-hidden bg-neutral-900 border-2 transition-all duration-300 group select-none shadow-md ${
        isHovered ? 'border-[#2596be] shadow-[0_0_25px_rgba(37,150,190,0.3)]' : 'border-neutral-200'
      }`}
    >
      {/* Aspect Ratio Sizing Container */}
      <div 
        className={`relative w-full overflow-hidden bg-neutral-950 flex items-center justify-center ${
          isVertical 
            ? 'aspect-[9/16] max-h-[580px] mx-auto' 
            : 'aspect-[16/9] w-full'
        }`}
      >
        {/* Actual Video Element */}
        {!hasError ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={fallbackPoster}
            playsInline
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onError={() => setHasError(true)}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />
        ) : (
          /* High-Fidelity Animated Poster Fallback */
          <div 
            onClick={togglePlay} 
            className="relative w-full h-full cursor-pointer bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${fallbackPoster})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            
            <div className="relative z-10 text-center px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#2596be]/50 text-xs text-[#2596be] mb-3">
                <Activity className="w-3.5 h-3.5 text-[#2596be] animate-pulse" />
                <span>4K Master Preview</span>
              </div>
              <p className="text-white text-sm font-semibold max-w-xs drop-shadow-md">
                {title}
              </p>
            </div>
          </div>
        )}

        {/* Top Badges Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider rounded-md bg-white/90 backdrop-blur-md text-[#2596be] border border-[#2596be]/40 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2596be] animate-pulse" />
              {isVertical ? '9:16 VERTICAL' : '16:9 HORIZONTAL'}
            </span>
            <span className="hidden sm:inline-block px-2 py-1 text-[10px] font-semibold rounded-md bg-black/70 backdrop-blur-md text-white border border-white/10">
              {nicheLabel}
            </span>
          </div>
        </div>

        {/* Center Play/Pause Pulsing Trigger (when paused or hovered) */}
        {(!isPlaying || isHovered) && (
          <button
            id={`center-play-${id}`}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="cursor-pointer absolute z-20 w-16 h-16 rounded-full bg-white/95 hover:bg-white text-[#2596be] border-2 border-[#2596be] flex items-center justify-center shadow-[0_0_25px_rgba(37,150,190,0.4)] transform transition-all duration-200 hover:scale-110 active:scale-95 group-hover:opacity-100"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 text-[#2596be]" />
            ) : (
              <Play className="w-7 h-7 text-[#2596be] translate-x-0.5" />
            )}
          </button>
        )}

        {/* Bottom Video Controls Overlay */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-3 pt-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20 transition-opacity duration-300 ${
            isHovered || !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress Scrubber with Brand Blue */}
          <div className="relative mb-2 flex items-center group/scrub">
            <input
              id={`scrubber-${id}`}
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1.5 bg-neutral-700/80 rounded-lg appearance-none cursor-pointer accent-[#2596be] hover:h-2 transition-all"
            />
            <div 
              className="absolute left-0 top-0 h-1.5 bg-[#2596be] rounded-lg pointer-events-none shadow-[0_0_8px_#2596be]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Control Buttons Bar */}
          <div className="flex items-center justify-between text-xs text-neutral-300 font-medium">
            <div className="flex items-center gap-3">
              <button
                id={`btn-play-pause-${id}`}
                onClick={togglePlay}
                className="cursor-pointer hover:text-[#2596be] transition-colors focus:outline-none"
              >
                {isPlaying ? <Pause className="w-4 h-4 text-[#2596be]" /> : <Play className="w-4 h-4 text-[#2596be]" />}
              </button>

              <button
                id={`btn-mute-${id}`}
                onClick={toggleMute}
                className="cursor-pointer hover:text-[#2596be] transition-colors focus:outline-none"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#2596be]" /> : <Volume2 className="w-4 h-4 text-[#2596be]" />}
              </button>

              <span className="font-mono text-[11px] text-white">
                {currentTime} / {duration}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                id={`btn-speed-${id}`}
                onClick={cycleSpeed}
                className="cursor-pointer px-2 py-0.5 rounded bg-black/60 hover:bg-[#2596be]/20 text-[#2596be] text-[10px] font-mono transition-colors border border-white/10"
                title="Playback Rate"
              >
                {playbackSpeed}x
              </button>

              <button
                id={`btn-fullscreen-${id}`}
                onClick={toggleFullscreen}
                className="cursor-pointer hover:text-[#2596be] transition-colors focus:outline-none"
                title="Fullscreen"
              >
                <Maximize className="w-4 h-4 text-[#2596be]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Under-Player Information Ribbon */}
      <div className="px-4 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-600">
        <span className="flex items-center gap-1.5 text-[#2596be]">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#2596be]" />
          <span className="font-semibold">Master Retention Cut</span>
        </span>
        <span className="font-mono text-neutral-500">
          60fps • 4K UHD • High Bitrate
        </span>
      </div>
    </div>
  );
}
