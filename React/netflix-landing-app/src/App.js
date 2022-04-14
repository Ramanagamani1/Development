import React from 'react';
import { Navbar, Body ,Todos, Background} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
      <Todos/>
    </div>
  );
}

export default App;
