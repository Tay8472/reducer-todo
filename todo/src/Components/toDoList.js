import React from 'react'
import { ToDo } from './toDo';

export function ToDoList(props) {

    return (
        <div>
            {props.state.map((item) => {
                return <ToDo item={item} key={item.id} handleComplete={props.handleComplete} />
            })}
        </div>
    )
} 