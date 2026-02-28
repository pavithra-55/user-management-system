import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../src/services/api.js";
import UserList from './components/UserList.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () =>{
    setLoading(true);
    const res = await getUsers();
    setUsers(res.data);
    setLoading(false);
  };

  useEffect(()=>{
    fetchUsers();
  },[])

  const addUser = async (data)=>{
    await createUser(data);
    fetchUsers();
  }

   const handleUpdate = async (id, data) => {
    await updateUser(id, data);
    setEditUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) =>{
    const confirmDelete = window.confirm(`Are you want to delete this user `);
    if(confirmDelete){
      await deleteUser(id);
    fetchUsers();
    }
  }

  return (
    <>
    <h2>User Management</h2>
      <UserForm 
        addUser={addUser}
        updateUser={handleUpdate}
        editUser={editUser}
      />
    {!users.length ? (<p>No Users...</p>) : loading ? (<p>Loading...</p>) :
    (
      <UserList users={users}
      onEdit={setEditUser}
      onDelete={handleDelete} />
    )
    }

      
    </>
  )
}

export default App
