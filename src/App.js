import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Burger from './components/Burger/Burger';

class App extends Component {
  render() {
    return (
      <Layout>
        <Burger />
      </Layout>
    );
  }
}

export default App;
