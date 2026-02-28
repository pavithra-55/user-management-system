import React, { use } from 'react'

const UserList = ({users, onEdit, onDelete}) => {
  return (
    <table className='table table-bordered'>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
            {users.map((user)=>(
                <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.MobileNumber}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-warning btn-sm me-2' onClick={()=>onEdit(user)}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={()=>onDelete(user.id)}>Delete</button>
                </td>
            </tr>
            ))}

            
      </tbody>
    </table>
  )
}

export default UserList
