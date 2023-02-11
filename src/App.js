import './App.css';
import Contact from './Components/Contact/contact';
import Intro from './Components/Intro/intro';
import Nav from './Components/Nav/nav';
import Project from './Components/Projects/projects';
import Skills from './Components/Skills/skills';


function App() {

  return (
    <div className="App">
      <header className="header">
        <Nav/>
      </header>
        <Intro/> 
        <Project/>
        <Skills/>
        <Contact/>
      <footer>
      <p className='copyright'>
        Copyright &copy; 2023 Kevin Xie. All rights are resevered
      </p>
      </footer>
    </div>
  );
}

export default App;
