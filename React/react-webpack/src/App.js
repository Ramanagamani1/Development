import React from "react";
import Helloworld from "./Helloworld";
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.App}>
           <h1>Hello world from React</h1>
           <Helloworld/>
        </div>
    )
}
export default App;