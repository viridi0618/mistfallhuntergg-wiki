import LiteYouTubeEmbed from "./LiteYouTubeEmbed";
import type { ContentVideo } from "@/lib/types";

export function formatVideoPublishedDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

export default function ArticleVideo({ video }: { video: ContentVideo }) {
  return (
    <aside className="article-video" aria-label={`Video: ${video.title}`}>
      <LiteYouTubeEmbed video={video} position={1} />
      <div className="article-video-body">
        <div className="video-meta">
          <span>{video.channel}</span>
          <span>{video.duration}</span>
          <span>{`Published ${formatVideoPublishedDate(video.published)}`}</span>
          {video.gameVersion && <span>{video.gameVersion}</span>}
        </div>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <h4>What to watch for</h4>
        <ul>{video.watchFor.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="article-video-disclosure">Video belongs to its original publisher. This placement is editorial and not sponsored.</p>
        <a className="watch-youtube" href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
      </div>
    </aside>
  );
}
