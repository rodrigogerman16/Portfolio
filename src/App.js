import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Form from './Footer/Form.js';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';

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
      <div className='Body' id="work">
        <div className='Proyects'>
          <a className='Proyects-card card1' href='https://mypiroska.com/index.html'>
            <div className='Proyects-img'>
              <img src='mypiroska.png' alt='mypiroska'/>
            </div>
            <div className='Proyects-description'>
              <h3>My Piroska</h3>
              <p>Lore ipsum</p>
            </div>
          </a>
          <a className='Proyects-card card2' href='https://belentejedor.vercel.app/'>
            <div className='Proyects-img'>
              <img src='belenpage.png' alt='belenpage'/>
            </div>
            <div className='Proyects-description'>
              <h3>Belen Tejedor Landing Page</h3>
              <p>Lore ipsum</p>
            </div>
          </a>
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
