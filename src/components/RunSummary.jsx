<div
  style={{
    border: "1px solid rgba(99,102,241,0.2)",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "16px",
    background: "linear-gradient(145deg, rgba(99,102,241,0.08), rgba(52,211,153,0.05))",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Top shimmer line */}
  <div style={{
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "2px",
    background: "linear-gradient(90deg, #6366f1, #34d399, transparent)",
  }} />

  {/* Your content here */}
</div>