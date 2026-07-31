"use client";

import Link from "next/link";
import LiteYouTubeEmbed from "./LiteYouTubeEmbed";
import type { FeaturedVideo } from "@/data/videos";

export default function VideoCard({
  video,
  position,
}: {
  video: FeaturedVideo;
  position: number;
}) {
  function trackGuideClick(label: string) {
    const analyticsWindow = window as typeof window & {
      gtag?: (command: string, event: string, parameters: Record<string, string | number>) => void;
    };
    analyticsWindow.gtag?.("event", "video_related_guide_click", {
      video_title: video.title,
      video_id: video.id,
      guide_label: label,
      video_position: position,
    });
  }

  return (
    <article className={`video-card ${position === 1 ? "video-card-featured" : ""}`}>
      <LiteYouTubeEmbed video={video} position={position} />
      <div className="video-card-body">
        <div className="video-meta">
          <span>{video.category}</span>
          <span>{video.channel}</span>
          <span>{video.duration}</span>
        </div>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <h4>What to watch for</h4>
        <ul>
          {video.watchFor.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="video-related">
          <span>Related guides</span>
          {video.relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} onClick={() => trackGuideClick(guide.label)}>
              {guide.label}
            </Link>
          ))}
        </div>
        <a className="watch-youtube" href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </div>
    </article>
  );
}
