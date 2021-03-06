import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/project'
import Experience from './components/experience'
import Connect from './components/connect'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
            <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Connect></Connect>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
