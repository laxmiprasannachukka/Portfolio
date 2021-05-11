import './App.css';
import Header from './components/header.js';
import TopContainer from './components/topContainer.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
//import Education from './components/education.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
     <Header/>
     <TopContainer/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
