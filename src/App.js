import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Starship from './components/Starship'
import Layout from './components/common/Layout'
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path='/starship' render={({location}) =>
              <Starship location={location}/>
            }/>
          </div>
      </Layout>
    </div>
  );
}

export default App;
