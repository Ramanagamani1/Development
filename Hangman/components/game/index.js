import React , {useState} from 'react'
import { createSession,playInSession } from '../../api/sessions';
import Layout from './Layout';

const MAX_LIVES = 6;
export default function Game() {

    const [session,setSession] = useState(null);
    const isRunning = !!session;

    const guess = async (letter) => {  
      const updatedSession = await playInSession(session.id,letter)
      setSession(updatedSession)
    }

    const start = async( name) => {
        const session = await createSession(name);
        setSession(session)
    }

    return (
        <>
           <Layout 
            session = {session}
            guess={guess}
            start={start}
            isRunning={isRunning}
          /> 
        </>
    )
}


/*
const MAX_LIVES = 6;
export default function Game() {

    const [actualWord, setActualWord] = useState("")
    const [playedLetters, setPlayedLetters] = useState([])

    const word_set = new Set([...actualWord])
    const played_set = new Set([...playedLetters])
    const wrongLetters = playedLetters.filter(letter => {
        return !word_set.has(letter)
    })
    const lives = MAX_LIVES - wrongLetters.length
    const isRunning = actualWord;
    const isWon = isRunning  && lives && [...word_set].reduce((acc,curr) => {
        if (!played_set.has(curr)) return false;
        return acc;
    }, true) 

    const guess = (letter) => {
        setPlayedLetters((prev) => [...prev, letter] )    
    }

    const start = () => {
         setActualWord("house")
        setPlayedLetters([])
    }

    return (
        <>
          <Layout 
            lives={session.livesleft}
            actualWord={actualWord}
            played_set={session.maskedWord}
            guess={guess}
            start={start}
            isRunning={isRunning}
          />
        </>
    )
}*/

