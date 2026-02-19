import RepoInput from "../components/RepoInput";

function Dashboard() {
  return (
    <div style={{
      position: "relative",
      background: "linear-gradient(145deg, #0f0f1a, #1a1a2e)",
      padding: "40px 36px",
      borderRadius: "20px",
      width: "480px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
      overflow: "hidden",
    }}>

      {/* Glow accents */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 200, height: 200, borderRadius: "50%",
        background: "rgba(99,102,241,0.25)", filter: "blur(60px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -40, left: -40,
        width: 160, height: 160, borderRadius: "50%",
        background: "rgba(52,211,153,0.15)", filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "rgba(99,102,241,0.15)",
        border: "1px solid rgba(99,102,241,0.35)",
        borderRadius: 999, padding: "4px 12px",
        marginBottom: 20,
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "#6366f1", boxShadow: "0 0 6px #6366f1",
          display: "inline-block",
        }} />
        <span style={{ fontSize: 11, color: "#a5b4fc", fontWeight: 600, letterSpacing: 1 }}>
          LIVE AGENT
        </span>
      </div>

      {/* Title */}
      <h1 style={{
        margin: "0 0 8px",
        fontSize: 26,
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "-0.5px",
        lineHeight: 1.2,
      }}>
        AI DevOps{" "}
        <span style={{
          background: "linear-gradient(90deg, #6366f1, #34d399)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Agent
        </span>
      </h1>

      {/* Subtitle */}
      <p style={{
        margin: "0 0 28px",
        fontSize: 13,
        color: "rgba(255,255,255,0.4)",
        letterSpacing: "0.3px",
      }}>
        Autonomous CI/CD Debugging Dashboard
      </p>

      {/* Divider */}
      <div style={{
        height: 1,
        background: "linear-gradient(90deg, rgba(99,102,241,0.4), transparent)",
        marginBottom: 28,
      }} />

      <RepoInput />
    </div>
  );
}

export default Dashboard;