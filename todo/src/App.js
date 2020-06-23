import React, { useReducer } from 'react';
import { ToDoForm } from './Components/toDoForm';
import { ToDoList } from './Components/toDoList';
import { initialState, reducer } from './Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <ToDoList state={state} handleComplete={handleComplete} />
      <ToDoForm addTodo={addTodo} />
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Task</button>
    </div>
  );
}

export default App; 