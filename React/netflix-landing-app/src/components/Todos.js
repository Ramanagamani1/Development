import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Todo from './Todo'

const API_URL="https://jsonplaceholder.typicode.com/todos"

export default function Todos() {
  const [isLoading,setIsLoading] = useState(true);
  const [count,setCount] = useState(0);
  const [todos,setTodos] = useState([]);

  const fetchData = async () => {
      let res = await axios.get(API_URL);
      setTodos(res.data)
      setIsLoading(false);
  }

  useEffect(()=>{
    console.log("render");
    fetchData();
  },[]);

  if(isLoading){
      return <p>Loading</p>
  } else {
      return (
          <div className='todos'>
              {todos.map((todo,index)=>{
                  return (
                      <Todo key={index} todo={todo}/>
                  )
              })}
          </div>
      )
  }

  return (
    <div>
        {/* <button 
        onClick={()=>{
          setCount(count+1);
        }}>
        Click me and count will increase - {count}
        </button> */}
        All Todos
        {

        }
    </div>
  )
}

/*
array destructuring:
const arr=[1,2,3,4]
const [firstval]=arr; gives firstVal=1
const [firstval,secondval] = arr
*/