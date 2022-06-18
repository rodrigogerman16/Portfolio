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
          <div className='Proyects-card card1'>
            <div className='Proyects-img'>
              <img src='mypiroska.png' alt='mypiroska'/>
            </div>
            <div className='Proyects-description'>
              <h3>My Piroska</h3>
              <p>Lore ipsum</p>
            </div>
          </div>
          <div className='Proyects-card card2'>
            <div className='Proyects-img'>
              <img src='belenpage.png' alt='belenpage'/>
            </div>
            <div className='Proyects-description'>
              <h3>Belen Tejedor Landing Page</h3>
              <p>Lore ipsum</p>
            </div>
          </div>
          <div className='Proyects-card card3'>
            <div className='Proyects-img'>
              <img src='mypiroska.png' alt='geoquizz'/>
            </div>
            <div className='Proyects-description'>
              <h3>GeoQuiz</h3>
              <p>Lore ipsum</p>
            </div>
          </div>
          <div className='Proyects-card card4'>
            <div className='Proyects-img'>
              <img src='mypiroska.png' />
            </div>
            <div className='Proyects-description'>
              <h3>My Piroska</h3>
              <p>Lore ipsum</p>
            </div>
          </div>
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
