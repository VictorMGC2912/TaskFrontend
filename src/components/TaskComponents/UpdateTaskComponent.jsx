import React from 'react'

export default function UpdateTaskComponent({task, onToggle}) {
  return (
    <div>
    <button 
        className={styles.updateButton}
        onClick={()=> onToggle(task._id, task.completed)}
    >
        {task.completed ? 'Desmarcar' : 'Completar'}
    </button>
    </div>
  )
}
