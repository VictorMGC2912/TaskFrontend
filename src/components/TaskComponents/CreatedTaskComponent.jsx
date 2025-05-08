import React, { useState } from 'react'

export default function CreatedTaskComponent({ onCreate}) {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleCreate = () => {
        if(!newTitle.trim()) return;
        onCreate(newTitle, newDescription);
        setNewTitle('');
        setNewDescription('')
    }

  return (
    <div>
      <input 
        type= 'text'
        placeholder='Nueva Tarea'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type= 'text'
        placeholder='Descripcion'
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={handleCreate}>Agregar</button>
    </div>
  )
}
