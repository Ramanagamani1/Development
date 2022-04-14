import React from 'react';
import { Navbar, Body ,Todos, Background} from './components';
import ClassComponent from './components/ClassComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Background/> */}
      <Navbar/>
      <Todos/>
      {/* <ClassComponent/> */}
    </div>
  );
}

export default App;
