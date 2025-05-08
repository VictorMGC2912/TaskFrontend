import axios from 'axios';
const taskUrlBack = 'http://localhost:9000/task/'

//CONSEGUIR TODAS LAS TAREAS
export const getAllTask = async () => {
    //Peticion al back de todas la tareas
    const response = await axios.get(taskUrlBack)
    return response.data;
};

//CREAR TAREAS
export const createTask = async (title, description) => {
    const response = await axios.post(taskUrlBack, {title, description});
    return response.data;
}

export const updateTask = async (id, completed, title, description) => {
    const response = await axios.put(`${taskUrlBack}/${id}`, {completed, title, description});
    return response.data;
}

export const deleteTask = async (id) => {
    const response = await axios.delete(`${taskUrlBack}/${id}`);
    return response.data;
}