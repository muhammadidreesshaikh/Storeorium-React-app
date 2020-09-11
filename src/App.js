import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import Slider from './Shared/Slider';

import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        
          {/* all components */} 
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/slider' component={Slider}></Route>
            </Switch>
          </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
