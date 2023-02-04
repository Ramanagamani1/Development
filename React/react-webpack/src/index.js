// import Helloworld from "./Helloworld";

// const root = document.getElementById('root');
// root.innerHTML = Helloworld

import ReactDOM from 'react-dom'
import React from 'react'

import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(<App/>)