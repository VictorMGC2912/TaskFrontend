import React from 'react'

export default function TaskList({tasks, onDelete, onToggle}) {

  return (
    <div className={styles.tasksList}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task._id} className={styles.taskItem}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
              {task.description}
            </span>
            <div>
              <UpdateTaskComponent task={task} onToggle={onToggle} />
              <DeleteTaskComponent taskId={task._id} onDelete={onDelete} />
            </div>
          </div>
        ))
      ) : (
        <p>No hay tareas</p>
      )}
    </div>
  );
}
