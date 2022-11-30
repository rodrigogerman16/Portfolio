import './App.css';
import Form from './Footer/Form.js';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Work from './Body/Work';
import Skills from './Skills/Skills';

function App() { 
  return (
    <div className="App">
      <NavBar/>  
      <Header/> 
      <Work/>
      <Skills/>
      <Form/>  
    </div>
  );
}

export default App;
