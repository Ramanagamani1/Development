import { useState,useEffect } from 'react';

export default function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      })
  
      useEffect(() => {
        function handleResize() {
           setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight
           })
        }
        window.addEventListener('resize', handleResize)
         
         // clean up the process
         return () => {
             window.removeEventListener('resize',handleResize);
         }
      }, [])
      
      return windowSize;
}