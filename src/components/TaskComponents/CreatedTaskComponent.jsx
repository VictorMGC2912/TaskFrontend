import React, { useState } from 'react'

export default function CreatedTaskComponent({ onCreateTitle, onCreateDescription}) {
    const {newTitle, setNewTitle} = useState('');
    const {newDescription, setNewDescription} = ('');

    const handleCreate = () => {
        if(!newTitle.trim()) return;
        onCreateTitle(newTitle, newDescription);
        setNewTitle('');
        setNewDescription('')
    }

  return (
    <div className= {styles.addTask}>
      <input 
        type= 'text'
        placeholder='Nueva Tarea'
        value={newTitle}
        onChange={(e) => {setNewTitle(e.target.value)}}
      />
      <input
        type= 'text'
        placeholder='Descripcion'
        value={newDescription}
        onChange={(e) => {setNewDescription(e.target.value)}}
      />
      <button onClick={handleCreate}>Agregar</button>
    </div>
  )
}
