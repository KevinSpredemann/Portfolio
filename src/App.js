import './App.css';
import Navbar from './Componentes/Section/Navbar';
import Presentation from './Componentes/Section/Presentation';
import Skills from './Componentes/Section/Skills';
import Projects from './Componentes/Section/Projects';
import Footer from './Componentes/Section/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
