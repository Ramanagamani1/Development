import React from "react";

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"]

export default function Letters ({playedLetters,onSelect}) {
    return (
        <div className="alphabets">
             {
                ALL_ALPHABETS.map(alphabet => (
                    <button className='start-button start-button--letters' 
                    onClick={(event)=> {
                        onSelect(alphabet);
                        event.target.disabled = true;
                    }}
                    disabled={playedLetters.has(alphabet)}
                    key = {alphabet}>
                    {alphabet}
                    </button>
                ))
             }
        </div>
    )
}