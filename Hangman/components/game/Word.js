import React from "react";

export default function Word({maskedWord}) {
    return (
        <div className="display-flex justify-content-around word-flex">
            {
                maskedWord.map((letter,index) => (
                    <>
                      { letter!="_" ? (
                         <div className="word" key={index}>{letter}</div>
                      ) : (
                          <div className="word" key={index}>&nbsp;_&nbsp;</div>
                      )}
                    </>
                ))
            }
        </div>
    )
}