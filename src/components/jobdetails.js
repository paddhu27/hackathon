import React from 'react';
import './style.css'


function Jobdetails() {
    return(
        <div>
      <div className="form">
        <div className='input-field'>
        <h1 class='head'>Squadsy</h1>
        <h4 class="head">Helping companies create amazing employee experiences for their new hires</h4>
        <div class = "card">
        <h2>Website</h2>
            <div><a href={"www.google.com"}> click here to go to our company website</a></div>
        
      <div className='input-field'>
            <h2>Location</h2>
            <div><p>remote</p></div>
      </div> 
      <div className='input-field'>
            <h2>Total raised</h2>
            <div><p>$25000</p></div>
      </div>    
      <div className='input-field'>
            <h2>Company size</h2>
            <div><p>$25000</p></div>
      </div> 
        </div>
    
      </div> <div> <button className="btn" type="submit" >Save</button>
      <button className="btn" type="submit" >Apply</button></div>  
          
        </div>
        </div>
    )       
}
export default Jobdetails;