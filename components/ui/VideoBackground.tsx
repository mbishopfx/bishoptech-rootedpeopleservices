'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const VideoBackground = ({
  src,
  className = '',
  overlay = true,
  overlayOpacity = 0.4,
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-sage-900/60 via-tan-900/50 to-peach-900/60"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
};

