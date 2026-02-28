import React, { useEffect, useState } from 'react'
import { formFields } from '../config/formFields'
import Button from './Button'

const UserForm = ({ addUser, updateUser, editUser }) => {
    const [formData, setFormData] =useState({});
    const [errors, setErrors] = useState({});

    useEffect(()=>{
      if(editUser){
        setFormData(editUser);
      }
    },[editUser]);

    const handleChange =(e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
      let newErrors = {}

      formFields.forEach((field)=>{
          if(field.required && !formData[field.name]){
            newErrors[field.name] = `${field.label} is required`;
          }
      });

      if(formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
        newErrors.email = "Invalid Email Format";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!validate){
          return;
        }


        if(editUser){
          updateUser(editUser.id, formData);
        }else{
          addUser(formData);
        }

        setFormData({});

    }
    const handleReset = () =>{
      setFormData({});
    }

  return (
    <div>
      <h3>Add User</h3>
      <div style={{border:'1px solid #000',padding:'20px', borderRadius:'8px',gap:'8px'}}>
        <form onSubmit={handleSubmit}>
        {formFields.map((field)=>(
            <div  key={field.name}>
                <label className='form-label' style={{fontWeight:'bold'}}>{field.label}<span style={{color:'red'}}>*</span></label>
                <input
                type={field.type}
                // pattern={field.type === 'tel' ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : undefined}
                placeholder={`Enter Your ${field.label}`}
                required={field.required}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="form-control"/>
                {errors[field.name] &&
                (<small className='text-danger'>
                {errors[field.name]}</small>)
            }
            </div>
            
            ))}
         <div className='d-flex gap-3 justify-content-center'>
            <Button type="submit" name={editUser? "Update":"Add"}/>
            <Button type='reset' name='Cancel' onClick={handleReset}/>
         </div>
      </form>
      </div>
    </div>
  )
}

export default UserForm
