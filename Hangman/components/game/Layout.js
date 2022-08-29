import React from "react";
import Lives from './Lives';
import Word from './Word';
import Letters from './Letters';
import Start from './Start';

export default function Layout({session,guess,start,isRunning}) {
    return (
        <>
        <div className="game-wrapper">
         { isRunning && 
            <>
                <div className="left-pane">
                     <Lives livesLeft={session.livesLeft} />
                </div> 
                <div className="right-pane">
                    <Word maskedWord={session.maskedWord} />
                    <Letters playedLetters={new Set()} onSelect={guess} />
                </div>
            </>
          }
          <Start onStart={start} isRunning={isRunning} />
          {/* {
            isWon && <>
              <div>You Won!</div>
            </>
          } */}
          </div>
        </>
    )
}