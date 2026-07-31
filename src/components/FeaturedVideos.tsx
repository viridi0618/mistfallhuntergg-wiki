import VideoCard from "./VideoCard";
import { featuredVideos } from "@/data/videos";

export default function FeaturedVideos() {
  return (
    <section className="featured-videos">
      <p className="section-label">Watch the Hunt</p>
      <h2>See Mistfall Hunter in Action</h2>
      <p className="section-intro">
        Watch official Mistfall Hunter gameplay and a detailed hands-on session before choosing a class or entering your first extraction. These videos are selected for gameplay value and relevance, not sponsorship.
      </p>
      <div className="video-grid">
        {featuredVideos.map((video, index) => (
          <VideoCard key={video.id} video={video} position={index + 1} />
        ))}
      </div>
      <p className="video-disclaimer">
        Videos belong to their respective publishers and creators and are embedded for commentary, reference, and player education.
      </p>
    </section>
  );
}
