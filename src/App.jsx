import Navbar from './components/Navbar.jsx'
import Name from './components/Name.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Spotify from './components/Spotify.jsx'
import FluidCursor from './components/FluidCursor.jsx'

function App() {
  return (
    <>
      <FluidCursor />
      <Navbar />
      <Name />
      <About />
      <Experience />
      <Projects />
      <Spotify />
    </>
  )
}

export default App
