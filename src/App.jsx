import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import menuVideo from './assets/Mainn.mp4'
import P3Menu from './P3Menu'
import VideoPage from './VideoPage'
import ResumePage from './ResumePage'
import resumeBg from './assets/resume-bg.mp4'
import resumeBgWebm from './assets/resume-bg.webm'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import SideProjectsPage from './SideProjectsPage'
import sideprojBg from './assets/sideproj-bg.mp4'
import sideprojBgWebm from './assets/sideproj-bg.webm'
import './App.css'

function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      <video src={menuVideo} autoPlay loop muted playsInline />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition><ResumePage src={resumeBg} srcWebm={resumeBgWebm} /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition variant="socials"><Socials /></PageTransition>
        } />
        <Route path="/sideproj" element={
          <PageTransition variant="resume"><SideProjectsPage src={sideprojBg} srcWebm={sideprojBgWebm} /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}
