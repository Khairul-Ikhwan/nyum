import { useNavigate } from "react-router-dom";

export default function MainHero({ children, backgroundImage }) {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="ad" style={{ backgroundImage: backgroundImage }}>
        {children}
      </div>
      <div className="recent-news" onClick={() => navigate("news/recent")}>
        recent news
      </div>
      <div
        className="upcoming-events"
        onClick={() => navigate("events/upcoming")}
      >
        upcoming events
      </div>
    </div>
  );
}
