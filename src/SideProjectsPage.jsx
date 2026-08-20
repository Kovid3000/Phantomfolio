import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PROJECTS = [
  {
    index: "01",
    title: "Breaking Bad Portfolio",
    status: "Live",
    url: "https://kovid3000.github.io",
    bullets: [
      "Breaking Bad-themed personal portfolio site.",
      "Hosted live on GitHub Pages under Kovid3000.",
    ],
  },
  {
    index: "02",
    title: "Google AI Arcade",
    status: "Active",
    url: "https://github.com/Kovid3000",
    bullets: [
      "Working through Google Cloud templates via the AI Arcade program.",
      "Building hands-on experience with AI tools and cloud fundamentals.",
    ],
  },
];

export default function SideProjectsPage({ src, srcWebm }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") setActive((i) => Math.max(0, i - 1));
      if (e.key === "ArrowDown") setActive((i) => Math.min(PROJECTS.length - 1, i + 1));
      if (e.key === "Enter") window.open(PROJECTS[active].url, "_blank", "noopener,noreferrer");
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape" || e.key === "Backspace") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, active]);

  const current = PROJECTS[active];

  return (
    <div id="menu-screen">
      <video autoPlay loop muted playsInline>
        {srcWebm && <source src={srcWebm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap');

        .sp-overlay { position: absolute; inset: 0; z-index: 10; pointer-events: none; }

        .sp-stack {
          position: absolute; top: 9vh; left: 2.8vw;
          width: min(47vw, 720px);
          display: flex; flex-direction: column; gap: 10px;
          pointer-events: none; transform: scale(0.9); transform-origin: top left;
        }

        .sp-list-tag {
          font-family: 'Anton', sans-serif; font-size: 92px; line-height: 0.9;
          color: #f6fbff; letter-spacing: 2px; margin: 0 0 6px 12px;
          text-shadow: 0 2px 0 rgba(0,0,0,0.18);
          opacity: 0; transform: translateX(-24px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .sp-list-tag.mounted { opacity: 1; transform: translateX(0); }

        .sp-card-wrap {
          position: relative; opacity: 0; transform: translateX(-48px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: all; cursor: pointer;
        }
        .sp-card-wrap.mounted { opacity: 1; transform: translateX(0); }

        .sp-card {
          position: relative; height: 112px; background: #10185f;
          clip-path: polygon(0 0, 97% 0, 100% 100%, 3% 100%);
          box-shadow: 0 8px 0 rgba(5, 13, 59, 0.85);
          transition: transform 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
        }
        .sp-card-wrap.active .sp-card {
          background: #ffffff; box-shadow: 10px 8px 0 #d63232; transform: translateX(6px);
        }

        .sp-card-inner {
          position: absolute; inset: 0; padding: 14px 22px 14px 62px;
          display: flex; align-items: flex-start; justify-content: space-between;
        }

        .sp-badge {
          position: absolute; top: 10px; left: -10px; width: 56px; height: 70px;
          background: #0b113d; border: 3px solid #9cf7ff;
          clip-path: polygon(14% 0, 100% 0, 84% 100%, 0 100%);
          display: flex; align-items: center; justify-content: center;
          transform: rotate(-8deg); box-shadow: 0 4px 0 rgba(0,0,0,0.28);
          transition: background 0.22s ease, border-color 0.22s ease;
        }
        .sp-badge-text {
          font-family: 'Bebas Neue', sans-serif; font-size: 30px;
          color: #d2fdff; letter-spacing: 1px; transform: rotate(8deg);
        }
        .sp-card-wrap.active .sp-badge { background: #000; border-color: #000; }
        .sp-card-wrap.active .sp-badge-text { color: #fff; }

        .sp-title {
          font-family: 'Anton', sans-serif; font-size: 40px; line-height: 0.95;
          letter-spacing: 1px; color: #a5f6ff; transition: color 0.22s ease;
        }
        .sp-card-wrap.active .sp-title { color: #000; }

        .sp-status {
          font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 2px;
          color: #9ffbff; flex-shrink: 0; margin-top: 4px;
          transition: color 0.22s ease;
        }
        .sp-card-wrap.active .sp-status { color: #000; }

        .sp-detail-panel {
          position: absolute; top: 9.5vh; right: 4.5vw;
          width: min(39vw, 620px); min-height: 50vh; z-index: 12;
          padding: 22px 24px 24px 24px;
          background: linear-gradient(180deg, rgba(15, 28, 105, 0.96) 0%, rgba(8, 16, 68, 0.97) 100%);
          clip-path: polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%);
          box-shadow: inset 0 0 0 1px rgba(133, 244, 255, 0.16), 16px 16px 0 rgba(0, 6, 30, 0.55);
          overflow: hidden;
        }
        .sp-detail-top {
          position: relative; display: grid; grid-template-columns: 70px 1fr auto;
          align-items: center; gap: 14px; min-height: 92px; padding: 0 18px;
          background: linear-gradient(90deg, #8ef5ff 0%, #d3fdff 100%);
          clip-path: polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
          color: #08153f; box-shadow: 10px 0 0 rgba(255, 94, 136, 0.88);
        }
        .sp-detail-top-index { font-family: 'Anton', sans-serif; font-size: 46px; line-height: 1; }
        .sp-detail-top-title { font-family: 'Anton', sans-serif; font-size: 34px; line-height: 0.92; letter-spacing: 1px; }
        .sp-detail-top-status { font-family: 'Bebas Neue', sans-serif; font-size: 26px; letter-spacing: 2px; line-height: 1; }

        .sp-detail-bottom {
          position: relative; margin-top: 22px; padding: 18px;
          background: rgba(5, 13, 57, 0.97);
          clip-path: polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
          box-shadow: inset 0 0 0 1px rgba(145, 239, 255, 0.12);
        }
        .sp-detail-bottom-title {
          font-family: 'Bebas Neue', sans-serif; font-size: 30px; letter-spacing: 2px;
          color: #91f5ff; margin-bottom: 14px;
        }
        .sp-detail-bullets { display: flex; flex-direction: column; gap: 10px; }
        .sp-detail-bullet { font-family: 'Anton', sans-serif; font-size: 20px; line-height: 1.2; color: #edfaff; }

        .sp-detail-link {
          display: block; margin-top: 18px; font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; letter-spacing: 2px; color: #06133b; background: #8df6ff;
          padding: 10px 16px; width: fit-content; text-decoration: none;
          clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
        }

        .sp-footer {
          position: fixed; bottom: 20px; right: 28px;
          display: flex; flex-direction: column; align-items: flex-end; gap: 5px;
          font-family: 'Bebas Neue', sans-serif; z-index: 14;
          opacity: 0; transition: opacity 0.4s ease 0.6s;
        }
        .sp-footer.mounted { opacity: 1; }
        .sp-footer-row { display: flex; align-items: center; gap: 8px; font-size: 13px; letter-spacing: 2px; color: rgba(255,255,255,0.22); }
        .sp-footer-key { border: 1px solid rgba(255,255,255,0.15); border-radius: 3px; padding: 1px 6px; font-size: 11px; }
      `}</style>

      <div className="sp-overlay">
        <div className="sp-stack">
          <div className={`sp-list-tag${mounted ? " mounted" : ""}`}>PROJECTS</div>
          {PROJECTS.map((p, index) => (
            <div
              key={p.index}
              className={`sp-card-wrap${active === index ? " active" : ""}${mounted ? " mounted" : ""}`}
              style={{ transitionDelay: `${index * 55}ms`, pointerEvents: "all" }}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <div className="sp-card">
                <div className="sp-badge"><div className="sp-badge-text">{p.index}</div></div>
                <div className="sp-card-inner">
                  <div className="sp-title">{p.title}</div>
                  <div className="sp-status">{p.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sp-detail-panel" style={{ pointerEvents: "all" }}>
          <div className="sp-detail-top">
            <div className="sp-detail-top-index">{current.index}</div>
            <div className="sp-detail-top-title">{current.title}</div>
            <div className="sp-detail-top-status">{current.status}</div>
          </div>
          <div className="sp-detail-bottom">
            <div className="sp-detail-bottom-title">DETAILS</div>
            <div className="sp-detail-bullets">
              {current.bullets.map((b) => (
                <div className="sp-detail-bullet" key={b}>- {b}</div>
              ))}
            </div>
            <a className="sp-detail-link" href={current.url} target="_blank" rel="noopener noreferrer">
              OPEN PROJECT →
            </a>
          </div>
        </div>
      </div>

      <div className={`sp-footer${mounted ? " mounted" : ""}`}>
        <div className="sp-footer-row"><span className="sp-footer-key">↑↓</span><span>SELECT</span></div>
        <div className="sp-footer-row"><span className="sp-footer-key">↵</span><span>OPEN</span></div>
        <div className="sp-footer-row"><span className="sp-footer-key">ESC</span><span>BACK</span></div>
      </div>
    </div>
  );
}
