import React, { useState } from 'react'

const API_URL="https://jsonplaceholder.typicode.com/todos"

export default function Todos() {
  const [count,setCount] = useState(0);
  return (
    <div>
        <button 
        onClick={()=>{
          setCount(count+1);
        }}>
        Click me and count will increase - {count}
        </button>
    </div>
  )
}

/*
array destructuring:
const arr=[1,2,3,4]
const [firstval]=arr; gives firstVal=1
const [firstval,secondval] = arr
*/