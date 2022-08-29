import React from 'react'

export default function Lives({livesLeft}) {
    var lives = '';
    if(livesLeft === 0){
        lives = "💀"
    }else{
        for (let i = 0; i < livesLeft; i++) {
        lives += '🧡';
        }
    }

    return (
        <div>
            <div className='lives'>
                {lives}
            </div>
        
            <div className="hangman-container">
                <div className="pole"></div>
                <div className={`hangman hangman-${6-livesLeft}`}>
                        <div className="hangman__element"></div>
                        <div className="hangman__element"></div>
                        <div className="hangman__element"></div>
                        <div className="hangman__element"></div>
                        <div className="hangman__element"></div>
                        <div className="hangman__element"></div>
                </div>
            </div>
        </div>
    )
}