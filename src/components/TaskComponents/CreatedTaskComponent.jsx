import React, { useState } from 'react'

export default function CreatedTaskComponent({ onCreateTitle, onCreateDescription}) {
    const {newTitle, setNewTitle} = useState('');
    const {newDescription, setNewDescription} = ('');

    const handleCreateTitle = () => {
        if(!newTitle.trim()) return;
        onCreateTitle(newTitle);
        setNewTitle('');
    }
    const handleCreateDescription = () => {
        if(!newDescription.trim()) return;
        onCreateDescription(newDescription);
        setNewDescription('');
    }

    const handleCreate = () => {
        handleCreateTitle()
        handleCreateDescription()
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
