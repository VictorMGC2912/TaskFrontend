import React from 'react'

export default function UpdateTaskComponent({task, onToggle}) {
  return (
    <div>
    <button 
        
        onClick={()=> onToggle(task._id, task.completed)}
    >
        {task.completed ? 'Desmarcar' : 'Completar'}
    </button>
    </div>
  )
}
