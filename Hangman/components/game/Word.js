import React from "react";

export default function Word({maskedWord}) {
    return (
        <div className="display-flex justify-content-around word-flex">
            {
                maskedWord.map((letter) => (
                    <>
                      { letter!="_" ? (
                         <div className="word">{letter}</div>
                      ) : (
                          <div className="word">&nbsp;_&nbsp;</div>
                      )}
                    </>
                ))
            }
        </div>
    )
}