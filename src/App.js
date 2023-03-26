import './App.css';
import './style/style.css'
import Navigation from './components/Navigation'
import Intro from './components/Intro';
import Akordeon from './components/Akordeon';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function App() {
  return (
    <div>
      <div className='myBG'>
        <Navigation/>
        <Intro/>
        <Modal/>
      </div>

      <div className='akordeon'>
        <Akordeon/>
      </div>
    
    </div>
  );
}

export default App;
