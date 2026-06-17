import { useState, useEffect, useCallback, useRef } from "react";
import "./Video.css";
import v1 from "../assets/Mobile Upload (58) (1).mp4";
import v2 from "../assets/Mobile Upload (59) (1).mp4";
import v3 from "../assets/Mobile Upload (56) (1).mp4";
import v4 from "../assets/Mobile Upload (65) (1).mp4";
import m1 from "../assets/58.webp"
import m2 from "../assets/59.webp"
import m3 from "../assets/56.webp"
import m4 from "../assets/65.webp"

const VIDEOS = [
  {
    id: 1,
    src: v1,
    poster: m1,
    tag: "Skincare",
    label: "Treatment Hook",
    desc: "30s · Meta Feed",

  },
  {
    id: 2,
    src: v2,
    poster: m2,
    tag: "Skincare",
    label: "UGC Creative",
    desc: "20s · Reels",

  },
  {
    id: 3,
    src: v3,
    poster: m3,
    tag: "Supplement",
    label: "Brand Narrative",
    desc: "25s · TikTok Feed",

  },
  {
    id: 4,
    src: v4,
    poster: m4,
    tag: "Supplement",
    label: "Lifestyle UGC",
    desc: "20s · Meta & TikTok",

  },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// ─── POSTER THUMB (paused, shows first frame as poster) ──────────────────────
// We load the video but keep it paused — the browser renders the first frame.
// No autoplay, no loop. The card just shows a frozen thumbnail.
const VideoThumb = ({ video }) => (
  <img
    src={video.poster}
    alt={video.label}
    className="vs-thumb-image"
    loading="lazy"
  />
);

// ─── MODAL ───────────────────────────────────────────────────────────────────
const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="vs-modal-backdrop" 
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="vs-modal-box">
        <button className="vs-modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
        <div className="vs-modal-video-wrap">
          <video src={video.src} autoPlay controls playsInline />
        </div>
        <div className="vs-modal-footer">
          <div>
            <span className="vs-modal-tag">{video.tag}</span>
            <p className="vs-modal-label">{video.label}</p>
            <p className="vs-modal-desc">{video.desc}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

// ─── VIDEO CARD ───────────────────────────────────────────────────────────────
const VideoCard = ({ video, onPlay, size }) => (
  <div
    className={`vs-card vs-card--${size}`}
    onClick={() => onPlay(video)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onPlay(video)}
    aria-label={`Play ${video.label}`}
  >
    <div className="vs-card-scanline" aria-hidden="true" />

    <div className="vs-card-thumb">
      <VideoThumb video={video} />
    </div>

    {/* Top badge */}
    <div className="vs-card-top">
      <span className="vs-chip">{video.tag}</span>
    </div>

    {/* Play button — always visible, grows on hover */}
    <div className="vs-card-play-overlay">
      <button className="vs-play-btn" aria-label="Play video" tabIndex={-1}>
        <PlayIcon />
      </button>
    </div>

    {/* Bottom info */}
    <div className="vs-card-info">
      <div className="vs-card-info-left">
        <p className="vs-card-label">{video.label}</p>
        <p className="vs-card-desc">{video.desc}</p>
      </div>
      
    </div>
  </div>
);

// ─── TICKER ───────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "Meta Feed Ads", "TikTok UGC", "Reels Creative", "Before / After",
  "Lifestyle Hooks", "Brand Narrative", "AI-Generated", "Conversion-Optimised",
];

const Ticker = () => (
  <div className="vs-ticker" aria-hidden="true">
    <div className="vs-ticker-track">
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
        <span key={i} className="vs-ticker-item">
          <span className="vs-ticker-dot" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

// ─── ROOT EXPORT ─────────────────────────────────────────────────────────────
export default function VideoSections() {
  const [activeVideo, setActiveVideo] = useState(null);
  const openModal  = useCallback((video) => setActiveVideo(video), []);
  const closeModal = useCallback(() => setActiveVideo(null), []);

  const [featured, ...rest] = VIDEOS;

  return (
    <section className="vs-section" id="featured">
      <div className="vs-container">
        {/* Header */}
        <div className="vs-header">
          <div className="vs-header-left">
            <span className="vs-eyebrow">
              <span className="vs-eyebrow-dot" />
              Featured Work
            </span>
            <h2 className="vs-heading">
              AI UGC Ads That <br />
              <b>Actually Convert</b>
            </h2>
          </div>
          <div className="vs-header-right">
            <p className="vs-sub">
              Every creative is built for paid placement on Meta &amp; TikTok —
              scroll-stopping hooks, authentic talent, and platform-native formats.
            </p>
            {/* <a href="#portfolio" className="vs-cta">
              View Full Portfolio
              <ArrowIcon />
            </a> */}
          </div>
        </div>
      </div>

     

      <div className="vs-container">
        <div className="vs-grid">
          <VideoCard video={featured} onPlay={openModal} size="hero" />
          {rest.map((v) => (
            <VideoCard key={v.id} video={v} onPlay={openModal} size="sm" />
          ))}
        </div>
      </div>

      {activeVideo && <VideoModal video={activeVideo} onClose={closeModal} />} 
      
      {/* Ticker — sits flush between header and grid */}
      <Ticker />


    </section>
  );
}