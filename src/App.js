import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Form from './Components/Form.js';

function App() {  
  return (
    <div className="App">
      
      {/* Navbar */}
      <navbar>
        <ul className='Navbar'>
          <a href="#header">About me</a>
          <a href="#work">Work</a>
          <a href="#footer">Contact</a>        
        </ul>
      </navbar>

      {/* Header */}
      <header className='Header' id="header">
        <div className='Header-title'>
          <div><h2>Hi,</h2></div>
          <div className='Name'><h2>I'm Rodrigo,</h2></div>
          <div className='Description'><p>Front End Developer</p></div> 
        </div>
      </header>

      {/* Body */}
      <body className='Body' id="work">
        <div className='Proyects'>
          <span></span>
          <span></span>
        </div>
      </body>

      {/* Footer */}
      <footer className='Footer' id="footer">
        <Form />
        <div className='Social-icons'>
        <a href="https://www.instagram.com/rodrigogerman2/?hl=es"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://twitter.com/RodriiGerman"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://github.com/rodrigogerman16"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/rodrigo-german-8408a5127/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </footer>

    </div>
  );
}

export default App;
