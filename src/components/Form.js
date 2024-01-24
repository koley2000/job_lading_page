import React, { useContext, useState } from 'react'
import jobContext from '../context/jobContext';

function Form() {

  
  const [formData, setFormData] = useState({
    position: "", company_name: "", job_pipeline: "",
    add_location: "", experience: "", min_salary: "", max_salary: "", skills_required: "",
    intern_responsibilites: ""
  });
  const context = useContext(jobContext);
  const { addJob } = context;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {   //handle form submission
    event.preventDefault();
    addJob(formData.position, formData.company_name, formData.job_pipeline,
      formData.add_location, formData.experience, formData.min_salary, formData.max_salary, formData.skills_required,
      formData.intern_responsibilites);
    setFormData({
      position: "", company_name: "", job_pipeline: "",
      add_location: "", experience: "", min_salary: "", max_salary: "", skills_required: "",
      intern_responsibilites: ""
    });
    console.log("sucessfull")
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className='row'>
        <div className="col">
          <label htmlFor="positonInput">Position</label>
          <input type="text" className="form-control" id="positionInput" value={formData.position} name='position' onChange={handleInputChange} placeholder="" />
        </div>
        <div className="col">
          <label htmlFor="companyNameInput">Company Name</label>
          <input type="text" className="form-control" id="companyNameInput" value={formData.company_name} name='company_name' onChange={handleInputChange} placeholder="" />
        </div>
      </div>
      <div className='row'>
        <div className="col">
          <label htmlFor="jobPipelineInput">Job Pipeline</label>
          <input type="text" className="form-control" id="jobPipelineInput" value={formData.job_pipeline} name='job_pipeline' onChange={handleInputChange} placeholder="" />
        </div>
        <div className="col">
          <label htmlFor="addLocationInput">Add Location</label>
          <input type="text" className="form-control" id="addLocationInput" value={formData.add_location} name='add_location' onChange={handleInputChange} placeholder="" />
        </div>
      </div>
      <div className='row'>
        <div className="col">
          <label htmlFor="miniSalaryInput">Add Minimum Salary</label>
          <input type="text" className="form-control" id="miniSalaryInput" value={formData.min_salary} name='min_salary' onChange={handleInputChange} placeholder="" />
        </div>
        <div className="col">
          <label htmlFor="maxSalaryInput">Add Maximum Salary</label>
          <input type="text" className="form-control" id="maxSalaryInput" value={formData.max_salary} name='max_salary' onChange={handleInputChange} placeholder="" />
        </div>
      </div>

      <div className="col">
        <label htmlFor="experienceInput">Experience</label>
        <input type="text" className="form-control" id="experienceInput" value={formData.experience} name='experience' onChange={handleInputChange} placeholder="" />
      </div>

      <div>
        <div className="form-group">
          <label htmlFor="positonInput">Skills Required</label>
          <input type="text" className="form-control" id="positionInput" value={formData.skills_required} name='skills_required' onChange={handleInputChange} placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Intern’s Responsibilities</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" name='intern_responsibilites' value={formData.intern_responsibilites} onChange={handleInputChange} rows="3"></textarea>
        </div>


        <button className="btn btn-dark my-3" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
