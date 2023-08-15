
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
      </main>
    </>
  )
}

export default App
