import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Marquee from "react-fast-marquee"
import Dashboard from "./Dashboard"
import "./App.css"

function HomePage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would verify credentials here
    // For now, just redirect to dashboard
    navigate("/dashboard")
  }

  return (
    <div className="homepage">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/Home-LaneVC-1CLRm4v.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="overlay">
        {/* Logo */}
        <div className="left-side">
          <div className="logo-space">
            <img src="/Lane_VC_Logo-13.png" alt="Logo" className="logo" />
          </div>
          <h1>LANE VC INVESTOR</h1> 
          <h1>PORTAL</h1>
          </div>
        <div className="form-container">
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login In</button>
          </form>
        </div>
      </div>
      {/* Marquee logos */}
      <div className="logo-marquee">
        <Marquee
          gradient={false}       // removes fade at edges
          speed={40}             // adjust speed
          pauseOnHover={true}    // optional: stops when hovered
        >
          <img src="/XOS-logo.png" alt="Logo1" className="marquee-logo" />
          <img src="/vanderhal-logo.png" alt="Logo2" className="marquee-logo" />
          <img src="/serial1-logo.png" alt="Logo3" className="marquee-logo" />
          <img src="/cleanlab-logo.png" alt="Logo4" className="marquee-logo" />
          <img src="/enride-logo.png" alt="Logo5" className="marquee-logo" />
          {/* add as many logos as you want */}
        </Marquee>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App