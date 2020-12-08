import React from 'react'

import Router from './components/Router'

import Layout from './components/common/Layout'
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <div className="main">
          <Router/>
          </div>
      </Layout>
    </div>
  );
}

export default App;
