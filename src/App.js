import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Form from './Footer/Form.js';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Work from './Body/Work';

function App() { 
  return (
    <div className="App">
      
      {/* Navbar */}
      <NavBar/>

      {/* Header */}
      <header className="Header" id="header">        
        <Header/>        
      </header>

      {/* Body */}
      <Work/>

      {/* Footer */}
      <div className='Footer' id="footer">
        <Form />
        <div className='Social-icons'>
        <a href="https://www.instagram.com/rodrigogerman2/?hl=es"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://twitter.com/RodriiGerman"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://github.com/rodrigogerman16"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/rodrigo-german-8408a5127/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>

    </div>
  );
}

export default App;
