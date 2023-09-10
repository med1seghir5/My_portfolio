import React from 'react';
import './App.css';
import { Body } from './Components/Body';
import { Head } from './Components/Head';
import { About } from './Components/About';
import { Projects } from './Components/My projects';
import { Skills } from './Components/Skills';
import { Activities } from './Components/Activities';

function App() {
  return (
    <div>
      <Head />
      <Body />
      <Projects />
      <Skills />
      <Activities />
      <About />
    </div>
  );
}

export default App;
