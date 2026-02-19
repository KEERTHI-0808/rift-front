<div style={{ marginTop: 24 }}>
  {/* Input wrapper with glow on focus */}
  <div style={{
    position: "relative",
    display: "flex",
    alignItems: "center",
  }}>
    {/* GitHub icon */}
    <span style={{
      position: "absolute", left: 14,
      fontSize: 16, opacity: 0.5,
    }}>⌥</span>

    <input
      type="text"
      placeholder="https://github.com/user/repo"
      value={repoUrl}
      onChange={(e) => setRepoUrl(e.target.value)}
      disabled={loading}
      style={{
        width: "100%",
        padding: "13px 14px 13px 38px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        color: "#fff",
        fontSize: 13,
        outline: "none",
        boxSizing: "border-box",
        transition: "border 0.2s, box-shadow 0.2s",
        boxShadow: "0 0 0 0px rgba(99,102,241,0)",
      }}
      onFocus={e => {
        e.target.style.border = "1px solid rgba(99,102,241,0.7)";
        e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.15)";
      }}
      onBlur={e => {
        e.target.style.border = "1px solid rgba(255,255,255,0.1)";
        e.target.style.boxShadow = "0 0 0 0px rgba(99,102,241,0)";
      }}
    />
  </div>

  {/* Run Agent Button */}
  <button
    onClick={handleRunAgent}
    disabled={loading}
    style={{
      marginTop: 16,
      width: "100%",
      padding: "13px",
      borderRadius: 12,
      border: "none",
      background: loading
        ? "rgba(255,255,255,0.07)"
        : "linear-gradient(135deg, #6366f1, #34d399)",
      color: loading ? "rgba(255,255,255,0.3)" : "#fff",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.5px",
      cursor: loading ? "not-allowed" : "pointer",
      position: "relative",
      overflow: "hidden",
      transition: "opacity 0.2s, transform 0.1s",
    }}
    onMouseEnter={e => { if (!loading) e.target.style.opacity = 0.88; }}
    onMouseLeave={e => { e.target.style.opacity = 1; }}
    onMouseDown={e => { if (!loading) e.target.style.transform = "scale(0.98)"; }}
    onMouseUp={e => { e.target.style.transform = "scale(1)"; }}
  >
    {loading ? (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <span style={{
          width: 14, height: 14,
          border: "2px solid rgba(255,255,255,0.2)",
          borderTop: "2px solid #fff",
          borderRadius: "50%",
          display: "inline-block",
          animation: "spin 0.8s linear infinite",
        }} />
        Agent Running...
      </span>
    ) : (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        ▶ Run Agent
      </span>
    )}
  </button>

  {/* Spinner keyframe */}
  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
</div>