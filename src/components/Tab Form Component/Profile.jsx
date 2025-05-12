import React, { useState } from 'react'

const Profile = () => {

    const [formInput, setFormInput] = useState({name:"",age:"",email:""});

    const handleFormChange = (value,key) => {
        setFormInput((prev)=>({...prev,[key]:value}))
    }

    console.log(formInput)



  return (
    <div className='p-4 bg-green-100 rounded-2xl shadow-2xl mt-2'>
        <div>
            <label>Name</label>
            <input type='text' value={formInput.name} onChange={(e)=>handleFormChange(e.target.value,"name")} className='border border-black w-full h-8 rounded-sm px-2' placeholder='Enter Name' />
        </div>
        <div>
            <label>Age</label>
            <input type='number' value={formInput.age} onChange={(e)=>handleFormChange(e.target.value,"age")} className='border border-black w-full h-8 rounded-sm px-2' placeholder='Enter Age'  />
        </div>
        <div>
            <label>Email</label>
            <input type='email' value={formInput.emali} onChange={(e)=>handleFormChange(e.target.value,"email")} className='border border-black w-full h-8 rounded-sm px-2' placeholder='Enter Email' />
        </div>
    </div>
  )
}

export default Profile