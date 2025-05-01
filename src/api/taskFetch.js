const taskUrlBack = 'http://localhost:9000/task/'

//CONSEGUIR TODAS LAS TAREAS
export const getAllTask = async () => {
    //Peticion al back de todas la tareas
    const response = await fetch(taskUrlBack);
    const tasks = await response.json();
    return tasks
};

//CREAR TAREAS
export const createTask = async (bodyParams) => {
    const response = await fetch(taskUrlBack, {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: bodyParams
    })
    const taskCreated = await response.json()
    if(taskCreated.error) console.log(taskCreated.error)
    console.log(taskCreated)
    return
}