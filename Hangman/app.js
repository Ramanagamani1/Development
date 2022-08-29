import React from 'react'
import { createRoot } from 'react-dom/client';
import Game from './components/game';
import Navbar from './components/game/Navbar';
import './components/styles/main.scss'

const App = () => {
    return (
      <div>
        <Navbar />
        <Game />
      </div>
    )
}

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App/>);