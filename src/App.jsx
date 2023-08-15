
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Qualifications from './components/Qualifications/Qualifications'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualifications/>
      </main>
    </>
  )
}

export default App
