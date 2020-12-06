import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Starship from './components/Starship'
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
        <Route exact path="/" component={Home} />
        <Route path='/starship' render={({location}) =>
              <Starship location={location}/>
            }/>
    </div>
  );
}

export default App;
