import { createTask, deleteTask, getAllTask, updateTask } from "@/api/taskFetch";
import CreatedTaskComponent from "@/components/TaskComponents/CreatedTaskComponent";
import TaskList from "@/components/TaskComponents/TaskList"
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";



export default function Home() {
  //Estados para las tareas
  const [tasks, setTasks] = useState([]); //Listado de tareas
  

  //Funcion para conseguir todas las tareas
  const fetchTask = async () => {
    const tasksAux = await getAllTask();
    setTasks(tasksAux.data);
  };
  useEffect(() => {
    fetchTask();
  }, []);

  //Funcion para a crear tareas
  const addTask = async (title, description) => {
    try {
      await createTask(title, description);
      fetchTask();
    }catch(error){
      console.error('Error al agregar Tarea', error)
    }
  };

  //Funcion para borrar tarea segun ID
  const deleteTaskById = async(id) => {
    try{
      await deleteTask(id);
      fetchTask();
    }catch(error){
      console.error('Error al borrar tarea', error)
    }
  };

  //Funcion para actualizar tareas
  const toggleTask = async (id, completed, title, description) => {
    try{
      await updateTask(id, completed, title, description);
      fetchTask()
    }catch(error){
      console.error('Error al actualizar tarea', error)
    }
  };


  return (
    <>
      <div className={styles.container}>
        <h1>App de Tareas</h1>
        <CreatedTaskComponent onCreate={addTask}/>
        <TaskList task={tasks} onDelete={deleteTaskById} onToggle={toggleTask}/>

      </div>
      
    </>
  );
}
