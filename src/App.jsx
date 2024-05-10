import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Skill from './Components/Skill/Skill'
import About from "./Components/About/About"
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='bg-[#091630]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
