import React from "react";

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"]

export default function Letters ({playedLetters,onSelect}) {
    return (
        <div className="alphabets">
             {
                ALL_ALPHABETS.map(alphabet => (
                    <button className='start-button start-button--letters' onClick={()=> onSelect(alphabet)} disabled={playedLetters.has(alphabet)}>
                        {alphabet}
                    </button>
                ))
             }
        </div>
    )
}