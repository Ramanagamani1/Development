import React, { useState } from "react";

export default function Start({onStart, isRunning}) {
    const [name, setName] = useState("");

    return (
        <div className="start-container">
            <div>
                <input type="text" placeholder="Name" className={`start-input ${isRunning && 'display-none'}`} onChange={(e)=> setName(e.target.value)} name={name}/>
            </div>
            <button className={`start-button ${isRunning && 'display-none'}`} onClick={()=>onStart(name)}>
                Start
            </button>
        </div>
    )
}