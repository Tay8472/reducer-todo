import React from 'react'

export function ToDo(props) {

    return (
        <div>
            <h2 className={props.item.completed ? 'complete' : ''}
                onClick={(e) => {
                e.preventDefault()
                props.handleComplete(props.item.id)
            }} > {props.item.todo} </h2>
        </div>
    )
} 