import LiteYouTubeEmbed from "./LiteYouTubeEmbed";
import type { ContentVideo } from "@/lib/types";

export default function ArticleVideo({ video }: { video: ContentVideo }) {
  return (
    <aside className="article-video" aria-label={`Video: ${video.title}`}>
      <LiteYouTubeEmbed video={video} position={1} />
      <div className="article-video-body">
        <div className="video-meta">
          <span>{video.channel}</span>
          <span>{video.duration}</span>
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
