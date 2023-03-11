import  React,{ useState } from 'react';
import './style.css'

function Myprofile() {
        const [education, setEducation] = useState(null);
        const [branch, setBranch] = useState(null);
        const [linkedin, setLinkedin] = useState(null);
        const [gitlink,setGitlink] = useState(null);
        const [skills,setSkills] = useState(null);
        const [occupation,setOccupation] = useState(null);
        const [experience,setExperience] = useState(null);
    
        const onChangeHandler = (e) => {
            const {id , value} = e.target;
            if(id === "education"){
                setEducation(value);
            }
            if(id === "branch"){
                setBranch(value);
            }
            if(id === "linkedin"){
                setLinkedin(value);
            }
            if(id === "gitlink"){
                setGitlink(value);
            }
            if(id === "skills"){
                setSkills(value);
            }
            if(id === "occupation"){
                setOccupation(value);
            }
            if(id === "experience"){
                setExperience(value);
            }
    
        }
  
  return (
    <div className="profile">
      <nav class="head">
        <h1><b>Education & Skills Details</b></h1>
      </nav>
      <form >
        <div class='one1'>
        <div class='onee'>
        <div className="form-group">
          <label for="education" className="form-label">Current Education</label>
          <input className="form-control" name="education" value={education} onChange={ (e)=>onChangeHandler(e)} id="education" placeholder="Education"/>
        </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="branch" className="form-label">Branch</label>
          <input className="form-control" name="branch" value={branch} onChange={ (e)=>onChangeHandler(e)} id="branch" placeholder="Branch" />
        </div>
        </div>
  
        <div className="form-group">
          <label htmlFor="linkedin" className="form-label">Linkedin Profile</label>
          <input className="form-control" name="linkedin" value={linkedin} onChange={ (e)=>onChangeHandler(e)} id="linkedin" placeholder="Linkedin Profile" />
        </div>
        <div className="form-group">
          <label htmlFor="gitlink" className="form-label">Github Profile</label>
          <input className="form-control" name="gitlink"  value={gitlink} onChange={ (e)=>onChangeHandler(e)} id="gitlink" placeholder="Github Link" />
        </div>
        <div className="form-group">
          <label htmlFor="skills" className="form-label">Please add your skills</label>
          <input className="form-control" name="skills" value={skills} onChange={ (e)=>onChangeHandler(e)} id="skills" placeholder="Please Enter Your Skills"/>
        </div>
        <div class='box'>
        <div class="one">
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation"  value={occupation} onChange={ (e)=>onChangeHandler(e)} id="occupation" placeholder="Occupation" >
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Recruiter</option>
          </select>
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="experience" className="form-label">Coding Experience</label>
          <select className="form-select" name="experience"  value={experience} onChange={ (e)=>onChangeHandler(e)} id="experience" placeholder="Experience">
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

export default Myprofile;