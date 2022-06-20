//ACTION_TYPES
const GET_POSTS = "posts/GET_POST"

//ACTION
export const getPosts = () => {
   return async (dispatch,getState) => {
        console.log(getState(), 'State values');
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        response = await response.json();
        console.log(response,"posts data")
        if(response) {  
            console.log(response,"posts data") 
            dispatch({type:GET_POSTS,payload:response})
        }
   }
}

//Reducer

export default function reducer(state={
    posts:[]
    },action){
     switch(action.type){
         case GET_POSTS : {
              return {
                  ...state,
                  posts:action.payload
              }
         }
         default :
            return state;
     }
}