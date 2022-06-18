import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRotateBack, faPlay } from '@fortawesome/free-solid-svg-icons';
import Form from './Components/Form.js';
import React, { useState } from 'react';

function App() {  

  const [toggle, setToggle] = useState(true);

  const switchHeader = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      
      {/* Navbar */}
      <div>
        <ul className='Navbar'>
          <a href="#header">About me</a>
          <a href="#work">Work</a>
          <a href="#footer">Contact</a>        
        </ul>
      </div>

      {/* Header */}
      <header className='Header' id="header">

        <div className='Header-initial'>
          <div className='Header-title'>
            <div><h2>Hi,</h2></div>
            <div className='Name'><h2>I'm Rodrigo,</h2></div>
            <div className='Description'><p>Front End Developer</p></div> 
          </div>
          <div className='Headerbtn'>
            <button onClick={switchHeader}><FontAwesomeIcon icon={faPlay}/></button>
          </div>
        </div>

        <div className='Header-skills'>
          <div className='Header-title'>
            <div><h2>I like,</h2></div>
            <div className='Name'><h2>To create,</h2></div>
            <div className='Description'><p>Amazing experiences</p></div> 
          </div>
          <div className='Headerbtn'>
            <button><FontAwesomeIcon icon={faRotateBack} /></button>
          </div>
        </div>

      </header>

      {/* Body */}
      <div className='Body' id="work">
        <div className='Proyects'>
          <span>
            <div className='Proyects-img'>
              <img src='mypiroska.png' />
            </div>
            <h4>My Piroska</h4>
            <p>Lore ipsum</p>
          </span>
          <span>
            <div className='Proyects-img'>
              <img src='belenpage.png' />
            </div>
            <h4>Belen Tejedor Page</h4>
            <p>Lore ipsum</p>
          </span>
          <span>
            <div className='Proyects-img'>
              <img src='mypiroska.png' />
            </div>
            <h4>Geo Quizz</h4>
            <p>Lore ipsum</p>
          </span>
          <span>
            <div className='Proyects-img'>
              <img src='mypiroska.png' />
            </div>
            <h4>Weather App</h4>
            <p>Lore ipsum</p>
          </span>
        </div>
      </div>

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
