import React from 'react'
import UpdateTaskComponent from './UpdateTaskComponent';
import DeleteTaskComponent from './DeleteTaskComponent';

export default function TaskList({tasks, onDelete, onToggle}) {

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
            <div key={task.id || index}>
                <span>Tarea: {task.title}</span><br />
                <span>Completado: {task.completed ? 'Sí' : 'No'}</span>
                <div>
                    <UpdateTaskComponent task={task} onToggle={onToggle} />
                    <DeleteTaskComponent taskId={task.id} onDelete={onDelete} />
                </div>
            </div>
        ))
      ) : (
        <p>No hay tareas</p>
      )}
    </div>
  );
}
