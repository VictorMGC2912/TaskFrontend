import React from 'react'

export default function DeleteTaskComponent({taskId, onDelete}) {
  return (
    <div>
      <button
        className={styles.deleteButton} onClick={() => onDelete(taskId)}
      >
        Eliminar
      </button>
    </div>
  )
}
