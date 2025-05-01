const taskUrlBack = 'http://localhost:9000/task/'

export const getAllTask = async () => {
    //Peticion al back de todas la tareas
    const response = await fetch(taskUrlBack);
    const tasks = await response.json();
    return tasks
};