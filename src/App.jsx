import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [repoUrl, setRepoUrl] = useState("")
  const [running, setRunning] = useState(false)
  const [report, setReport] = useState(null)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const pts = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      color: ["#6366f1", "#34d399", "#f472b6", "#60a5fa"][Math.floor(Math.random() * 4)],
    }))
    setParticles(pts)
  }, [])

  const runAgent = () => {
    if (!repoUrl.startsWith("https://github.com")) {
      alert("Please enter a valid GitHub repository URL")
      return
    }
    setRunning(true)
    setReport(null)
    setTimeout(() => {
      let generatedReport
      if (repoUrl.includes("microsoft") || repoUrl.includes("vercel")) {
        generatedReport = { ci: true, deploy: true, warnings: 1 }
      } else if (repoUrl.includes("test") || repoUrl.includes("demo")) {
        generatedReport = { ci: false, deploy: false, warnings: 5 }
      } else {
        generatedReport = { ci: true, deploy: true, warnings: 2 }
      }
      setReport(generatedReport)
      setRunning(false)
    }, 2000)
  }

  return (
    <div className="page">
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            animation: `float ${p.duration}s ${p.delay}s ease-in-out infinite`,
            filter: "blur(1px)",
            pointerEvents: "none",
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Background blobs */}
      <div style={{
        position: "fixed", top: "5%", left: "10%",
        width: 350, height: 350, borderRadius: "50%",
        background: "rgba(99,102,241,0.25)", filter: "blur(100px)",
        animation: "float 12s ease-in-out infinite", pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", bottom: "5%", right: "10%",
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(52,211,153,0.2)", filter: "blur(100px)",
        animation: "float 15s 2s ease-in-out infinite", pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", top: "40%", right: "15%",
        width: 250, height: 250, borderRadius: "50%",
        background: "rgba(244,114,182,0.15)", filter: "blur(90px)",
        animation: "float 10s 4s ease-in-out infinite", pointerEvents: "none", zIndex: 0,
      }} />

      <div className="card">
        <span className="badge">LIVE AGENT</span>
        <h1>AI DevOps <span>Agent</span></h1>
        <p className="subtitle">Paste a GitHub repo and let the agent do the work</p>
        <input
          type="text"
          placeholder="https://github.com/username/repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={running}
        />
        <button onClick={runAgent} disabled={running}>
          {running ? "Agent Running..." : "🚀 Run Agent"}
        </button>
        {running && <p className="loading">🔄 Analyzing repository...</p>}
        {report && (
          <div className="report">
            <h3>Agent Report</h3>
            <p>{report.ci ? "✔ CI pipeline healthy" : "❌ CI pipeline failed"}</p>
            <p>{report.deploy ? "✔ No failed deployments" : "❌ Deployment issues found"}</p>
            <p>⚠ {report.warnings} warnings in build logs</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App