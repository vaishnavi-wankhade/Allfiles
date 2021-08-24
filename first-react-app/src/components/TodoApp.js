
import React , {useReducer} from 'react';

const initialState = {
    todo: " "
};

  function reducer(state , action) {
    switch(action.type){
        case "add-todo": 
        return todo.add;
        default:
            return todo;


             

        
    }
}


export default function TodoApp() {

    const[todo, dispatch] = useReducer(reducer , initialState)
        
    

    const add=()=>{
        dispatch({type:'add-todo'})
    }
     return (
        
        <div>
        <input
        type="text"
        placeholder="add todo"
        value={state}
        onChange={add }   
        />

            
        </div>
    )
    }

