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
        {/* <intro name = this.name, age = this.age, hobby = this.hobby */}
        <Intro/> 
        {/* In intro, you can refernece these by calling this.props.age bc its coming in as a prop */}
        <Project/>
        <Skills/>
        <Contact/>
      <footer>
      <p>
        Copyright &copy; 2023 Kevin Xie. All rights are resevered
      </p>
      </footer>
    </div>
  );
}

export default App;
