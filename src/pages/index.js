import { getAllTask } from "@/api/taskFetch";
import CreatedTaskComponent from "@/components/TaskComponents/CreatedTaskComponent";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";



export default function Home() {
  //Estados para las tareas
  const [tasks, setTasks] = useState([]); //Listado de tareas
  

  //Funcion para conseguir todas las tareas
  const getAllTasksAux = async () => {
    const tasksAux = await getAllTask();
    setTasks(tasksAux.data);
  };
  useEffect(() => {
    getAllTasksAux();
  }, []);


  return (
    <>
      
      
        <main className={styles.main}>
        <div className={styles.tasksList}>
  {tasks.length > 0 ? (
    tasks.map((task, index) => (
      <div key={index}>
        <span>Tarea: {task.title}</span><br />
        <span>Descripcion: {task.description}</span><br />
        <span>Completado: {task.completed ? 'Sí' : 'No'}</span>
      </div>
    ))
  ) : (
    <p>No hay tareas</p>
  )}
</div>
          <hr/>
          <div className={styles.homeActions}>
              {(!isCreating ? (
                <button
                className={styles.createButton}
                onClick={handlerCreateTask}
                >
                  Crear Tarea
                </button>
              ): (
                <CreatedTaskComponent 
                  setIsCreating={setIsCreating}
                  closeTaskCreation={closeTaskCreation}
                />
              ))}
          </div>
        </main>
        <footer className={styles.footer}>
          
        </footer>
      
    </>
  );
}
