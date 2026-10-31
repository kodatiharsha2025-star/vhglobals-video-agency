import React, { useState, useRef, useEffect, type ChangeEvent } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  RotateCcw
} from 'lucide-react';
import { AspectRatio } from '../types';

interface VideoPlayerProps {
  id: string;
  title: string;
  aspectRatio: AspectRatio;
  videoSrc: string;
  fallbackPoster?: string;
  nicheLabel?: string;
}

// Utility to parse YouTube video IDs from various formats (shorts, watch, youtu.be)
function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function VideoPlayer({
  id,
  title,
  aspectRatio,
  videoSrc,
  fallbackPoster
}: VideoPlayerProps) {
  const youtubeId = extractYouTubeId(videoSrc);
  const isYouTube = !!youtubeId;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  // Default to muted as requested
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.9);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [posterAttempt, setPosterAttempt] = useState(0);

  // Fallback poster choosing frame from video URL if not provided
  const getYouTubePoster = () => {
    if (!youtubeId) return undefined;
    const candidates = [
      fallbackPoster,
      `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${youtubeId}/frame0.jpg`,
      `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${youtubeId}/default.jpg`
    ].filter(Boolean) as string[];

    return candidates[Math.min(posterAttempt, candidates.length - 1)];
  };

  const videoPoster = isYouTube
    ? getYouTubePoster()
    : fallbackPoster || (
        videoSrc.includes('cloudinary.com')
          ? videoSrc.replace('/video/upload/', '/video/upload/so_1/').replace(/\.mp4$/i, '.jpg')
          : undefined
      );

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration;
    if (dur && !isNaN(dur) && isFinite(dur)) {
      setDuration(formatTime(dur));
    }
  };

  // Autoplay when scrolled into view (IntersectionObserver)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!isYouTube && videoRef.current) {
      videoRef.current.muted = isMuted;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // Autoplay when scrolled to it (default muted)
            if (isYouTube) {
              setIsPlaying(true);
            } else if (videoRef.current) {
              videoRef.current.muted = isMuted;
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                    setIsEnded(false);
                  })
                  .catch(() => {
                    // Browser policy fallback
                  });
              }
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
            // Pause video when scrolled out of view
            if (isYouTube) {
              setIsPlaying(false);
            } else if (videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: [0.15, 0.25, 0.5]
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [isYouTube, isMuted]);

  const togglePlay = () => {
    if (isYouTube) {
      setIsPlaying(!isPlaying);
      return;
    }

    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (isEnded) {
        videoRef.current.currentTime = 0;
        setIsEnded(false);
      }
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (!isYouTube && videoRef.current) {
      videoRef.current.muted = nextMuted;
      if (!nextMuted && volume === 0) {
        setVolume(0.8);
        videoRef.current.volume = 0.8;
      }
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    videoRef.current.volume = newVol;
    if (newVol === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(formatTime(cur));
    setProgress((cur / total) * 100);
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const seekPercentage = parseFloat(e.target.value);
    const total = videoRef.current.duration || 1;
    const newTime = (seekPercentage / 100) * total;
    videoRef.current.currentTime = newTime;
    setProgress(seekPercentage);
    setCurrentTime(formatTime(newTime));
  };

  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => console.warn(err));
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const isVertical = aspectRatio === '9:16';

  return (
    <div
      ref={containerRef}
      id={`video-player-${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full rounded-xl overflow-hidden bg-black select-none group shadow-md ${
        isVertical ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video w-full'
      }`}
    >
      {isYouTube ? (
        /* YouTube Embed or Default Video Frame Poster */
        isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0 bg-black"
          />
        ) : (
          <div className="relative w-full h-full cursor-pointer group" onClick={togglePlay}>
            <img
              src={videoPoster}
              alt={title}
              onError={() => setPosterAttempt(prev => prev + 1)}
              className="w-full h-full object-cover bg-black group-hover:scale-105 transition-transform duration-300"
            />
            {/* Center Play Button Overlay */}
            <button
              id={`play-btn-overlay-${id}`}
              onClick={togglePlay}
              aria-label="Play Video"
              className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[#2596be]/90 hover:bg-[#2596be] text-white flex items-center justify-center shadow-xl backdrop-blur-sm transition-transform duration-200 hover:scale-110 active:scale-95 border-2 border-white/40"
            >
              <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
            </button>
          </div>
        )
      ) : (
        /* Standard HTML5 Video with Custom Controls */
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            poster={videoPoster}
            preload="metadata"
            playsInline
            loop
            muted={isMuted}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => {
              setIsPlaying(false);
              setIsEnded(true);
            }}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer bg-black"
          />

          {/* Center Play / Replay Button Overlay (Shown when paused or ended) */}
          {(!isPlaying || isEnded) && (
            <button
              id={`play-btn-overlay-${id}`}
              onClick={togglePlay}
              aria-label={isEnded ? "Replay Video" : "Play Video"}
              className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[#2596be]/90 hover:bg-[#2596be] text-white flex items-center justify-center shadow-xl backdrop-blur-sm transition-transform duration-200 hover:scale-110 active:scale-95 border-2 border-white/40"
            >
              {isEnded ? (
                <RotateCcw className="w-7 h-7 text-white" />
              ) : (
                <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
              )}
            </button>
          )}

          {/* Bottom Video Controls Bar for HTML5 video */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-3 pt-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 transition-opacity duration-200 ${
              isHovered || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar / Scrubber */}
            <div className="relative mb-2 flex items-center group/scrub">
              <input
                id={`progress-scrubber-${id}`}
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#2596be] hover:h-2 transition-all"
                title="Seek video"
              />
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-[#2596be] rounded-lg pointer-events-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-between text-xs text-white font-medium">
              {/* Left: Play/Pause, Volume, Time */}
              <div className="flex items-center gap-3">
                <button
                  id={`btn-play-pause-${id}`}
                  onClick={togglePlay}
                  className="cursor-pointer p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors focus:outline-none"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white translate-x-0.5" />
                  )}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    id={`btn-mute-${id}`}
                    onClick={(e) => toggleMute(e)}
                    className="cursor-pointer p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors focus:outline-none"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-rose-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <input
                    id={`volume-slider-${id}`}
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-14 sm:w-18 h-1 bg-white/30 rounded appearance-none cursor-pointer accent-[#2596be]"
                    title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                  />
                </div>

                <span className="font-mono text-[11px] text-neutral-300">
                  {currentTime} / {duration}
                </span>
              </div>

              {/* Right: Fullscreen */}
              <div className="flex items-center gap-2">
                <button
                  id={`btn-fullscreen-${id}`}
                  onClick={(e) => toggleFullscreen(e)}
                  className="cursor-pointer p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors focus:outline-none"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize className="w-4 h-4" />
                  ) : (
                    <Maximize className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Quick Mute/Unmute Badge (Top-Right, accessible on all videos) */}
      <button
        id={`quick-mute-btn-${id}`}
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="cursor-pointer absolute top-3 right-3 z-30 p-2 rounded-full bg-black/65 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-md"
        title={isMuted ? "Click to unmute sound" : "Sound on - click to mute"}
      >
        {isMuted ? (
          <div className="flex items-center gap-1.5 px-1">
            <VolumeX className="w-4 h-4 text-rose-300" />
            <span className="text-[10px] font-semibold text-neutral-200">MUTED</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-1">
            <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-emerald-300">SOUND ON</span>
          </div>
        )}
      </button>
    </div>
  );
}
