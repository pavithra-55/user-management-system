import axios from 'axios';


const API = axios.create({
    baseURL:'http://localhost:3001/users'
});

export const getUsers = () => API.get("/");
export const createUser = (data) => API.post("/", data);
export const updateUser = (id, data) => API.put(`/${id}`, data);
export const deleteUser = (id) => API.delete(`/${id}`);