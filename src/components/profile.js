/*import React,{ useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
    <label>Are you a fresher<input type="radio" name="fresher" value="true" onChange={handleChange} />Yes</label>
    <div><input type="radio" name="fresher" value="true" onChange={handleChange} />no</div></div>

      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default MyForm;
*/


import  React,{ useState } from 'react';
import './style.css'

function Myform() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    occupation: '',
    gender: '',
    languages: ['html'],
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className="profile">
      <nav class="head">
        <h1><b>Education & Skills Details</b></h1>
      </nav>
      <form onSubmit={onSubmitHandler}>
        <div class='one1'>
        <div class='onee'>
        <div className="form-group">
          <label htmlFor="education" className="form-label">Current Education</label>
          <input className="form-control" name="education" onChange={onChangeHandler} value={formData.education} />
        </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="branch" className="form-label">Branch</label>
          <input className="form-control" name="branch" onChange={onChangeHandler} value={formData.branch} />
        </div>
        </div>
  
        <div className="form-group">
          <label htmlFor="username" className="form-label">Linkedin Profile</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Github Profile</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
        </div>
        <div class='box'>
        <div class="one">
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Recruiter</option>
          </select>
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="experience" className="form-label">Coding Experience</label>
          <select className="form-select" name="experience" onChange={onChangeHandler} value={formData.experience}>
            <option value="Beginner">Basic</option>
            <option value="Moderate">Intermediate</option>
            <option value="Talented">Talented</option>
          </select>
        </div>     
</div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Myform;
