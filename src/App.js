import './App.css';
import Form from './Footer/Form.js';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Work from './Body/Work';
import Stack from './Stack/Stack';
import About from './About/About';
import { Route, Switch } from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar/>  
          <Header/> 
          <Work/>
          <Stack/>
          <Form/>
        </Route>
        <Route exact path="/about">
          <NavBar/> 
          <About/>
        </Route>       
        <Route exact path="/work">
            <NavBar/> 
            <Work/>      
        </Route>  
        <Route exact path="/contact">
          <NavBar/> 
          <Form/>
        </Route>   
      </Switch>
      
    </div>
  );
}

export default App;
