import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';

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
            </Switch>
          </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
