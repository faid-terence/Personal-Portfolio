import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualifications from "./components/Qualifications/Qualifications";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Portfolio />
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
