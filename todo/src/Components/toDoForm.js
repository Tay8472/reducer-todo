import React, { useState } from 'react'

export function ToDoForm (props) {
    const [formState, setFormState] = useState('')
   return(

    <form onSubmit={(event) => {
        event.preventDefault()
        props.addTodo(formState)
        setFormState('')
    }}>
        <input 
            name='todo'
            placeholder='Add Something Here'
            value={formState}
            onChange={(event) => {
                setFormState(event.target.value)
            }}
        />
        <button type='submit'>Add Todo</button>
    </form>
   )
} 