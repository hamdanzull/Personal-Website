import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import NotFoundPage from "./pages/NotFoundPage"
import AboutPage from "./pages/AboutPage"
import ReactGA from "react-ga4";

const trackingId = "G-ETW3F6K6VY"
ReactGA.initialize(trackingId);

export default function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}
