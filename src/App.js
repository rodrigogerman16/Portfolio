import './App.css';

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
        
      </div>

    </div>
  );
}

export default App;
