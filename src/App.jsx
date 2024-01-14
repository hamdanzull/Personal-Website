/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import NotFoundPage from "./pages/NotFoundPage"
import AboutPage from "./pages/AboutPage"

export default function App() {
  const [visitorCount, setVisitorCount] = useState('…')
  const getVisitorCount = async () => {
    const response = await fetch('https://counterpro.vercel.app/count/?id=hamdanzull-personal-website');
    const data = await response.json()
    setVisitorCount(data.count)
  }

  useEffect(() => {
    return () => getVisitorCount()
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage visitorCount={visitorCount} />} />
          <Route path="/about" element={<AboutPage visitorCount={visitorCount} />} />
          <Route path="/projects" element={<ProjectPage visitorCount={visitorCount} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}
