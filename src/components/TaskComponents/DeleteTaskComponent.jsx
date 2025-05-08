import React from 'react'

export default function DeleteTaskComponent({taskId, onDelete}) {
  return (
    <div>
      <button
         onClick={() => onDelete(taskId)}
      >
        Eliminar
      </button>
    </div>
  )
}
