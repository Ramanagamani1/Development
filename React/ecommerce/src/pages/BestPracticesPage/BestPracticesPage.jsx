import React from 'react'
import { useRef } from 'react';
import { Fragment } from 'react';
import Accordian from '../../components/Accordian/Accordian';
import useWindowSize from '../../hooks/useWindowSize';

const list = [
    'Render list item 1',
    'Render list item 2',
    'Render list item 3',
    'Render list item 4',
    'Render list item 5'
]

function BestPracticesPage () {
    const {width, height} = useWindowSize();
    const inputRef = useRef();

    return (
       <Fragment>
          <Accordian heading="My Accordian" >
             <ul>
                {list.map((item,index) => <li key={index}>{item}</li>)}
             </ul>
             <Accordian heading="Nested Accordian">
             <ul>
                {list.map((item,index) => <li key={index}>{item}</li>)}
             </ul>
             </Accordian>
          </Accordian>
          <input ref={inputRef}/>
          <button onClick={()=> inputRef.current.focus()}>Focus Input</button>
          <div>Window width: {width}</div>
          <div>Window height: {height}</div>
       </Fragment>
    )
}

export default BestPracticesPage;


/*
  unmounting means component is no longer visible on dom.
  cleanup functions are used to remove eventListeners

*/