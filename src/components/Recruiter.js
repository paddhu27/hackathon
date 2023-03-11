import React, {useState} from 'react';
import './style.css'


function RegisterRecruiter() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [companyname,setCompanyname] = useState(null);
    const [role,setRole] = useState(null);
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "companyname"){
            setCompanyname(value);
        }
        if(id === "role"){
            setRole(value);
        }

    }

    return(
      <div className="form">
        <div class="first">
            <h1>Alpha Career</h1>
        </div>
        <div className='input-field'>
        <nav class="bg-dark navbar-dark navbar">
        <h1>Registration Form</h1>
        </nav>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/> 
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
              </div>
              <div className="company_name">
                  <label className="form__label" for="companyname">Company Name</label>
                  <input className="form__input" type="text" id="companyname" value={companyname} onChange = {(e) => handleInputChange(e)} placeholder="Enter Company name"/>
              </div>
              <div className="Role">
                  <label className="form__label" for="role">Present Role</label>
                  <input className="form__input" type="text" id="companyname" value={role} onChange = {(e) => handleInputChange(e)} placeholder="Enter Your Role"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
      </div>
    )       
}
export default RegisterRecruiter;