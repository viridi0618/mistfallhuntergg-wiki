"use client";

import Image from "next/image";
import { useState } from "react";

type PlayableVideo = {
  id: string;
  title: string;
  channel: string;
  duration: string;
  thumbnail: string;
  thumbnailAlt: string;
};

export default function LiteYouTubeEmbed({
  video,
  position,
}: {
  video: PlayableVideo;
  position: number;
}) {
  const [playing, setPlaying] = useState(false);

  function playVideo() {
    const analyticsWindow = window as typeof window & {
      gtag?: (command: string, event: string, parameters: Record<string, string | number>) => void;
    };
    analyticsWindow.gtag?.("event", "video_play", {
      video_title: video.title,
      video_channel: video.channel,
      video_id: video.id,
      video_position: position,
    });
    setPlaying(true);
  }

  return (
    <div className="lite-video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&autoplay=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={video.thumbnail}
            alt={video.thumbnailAlt}
            width={1280}
            height={720}
            sizes={position === 1 ? "(max-width: 820px) 100vw, 760px" : "(max-width: 820px) 100vw, 380px"}
          />
          <button type="button" onClick={playVideo} aria-label={`Play ${video.title}`}>
            <span aria-hidden="true">▶</span>
          </button>
          <span className="video-duration">{video.duration}</span>
        </>
      )}
    </div>
  );
}
