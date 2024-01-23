import React, { useContext, useState } from 'react'
import jobContext from '../context/jobContext';

function Form() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const context = useContext(jobContext);
  const {addJob} = context;

  const handleNext = () => {
    setStep(step + 1);
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {   //handle form submission
    event.preventDefault();
    addJob(formData);
    setFormData({});
    console.log("sucessfull")
  }

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (<div className="form-group">
        <div className='row'>
          <div className="col">
            <label for="positonInput">Position</label>
            <input type="text" className="form-control" id="positionInput" value={formData.position} name='position' onChange={handleInputChange} placeholder="" />
          </div>
          <div className="col">
            <label for="companyNameInput">Company Name</label>
            <input type="text" className="form-control" id="companyNameInput" value={formData.company_name} name='company_name' onChange={handleInputChange} placeholder="" />
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <label for="jobPipelineInput">Job Pipeline</label>
            <input type="text" className="form-control" id="jobPipelineInput" value={formData.job_pipeline} name='job_pipeline' onChange={handleInputChange} placeholder="" />
          </div>
          <div className="col">
            <label for="addLocationInput">Add Location</label>
            <input type="text" className="form-control" id="addLocationInput" value={formData.add_location} name='add_location' onChange={handleInputChange} placeholder="" />
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <label for="miniSalaryInput">Add Minimum Salary</label>
            <input type="text" className="form-control" id="miniSalaryInput" value={formData.min_salary} name='min_salary' onChange={handleInputChange} placeholder="" />
          </div>
          <div className="col">
            <label for="maxSalaryInput">Add Maximum Salary</label>
            <input type="text" className="form-control" id="maxSalaryInput" value={formData.max_salary} name='max_salary' onChange={handleInputChange} placeholder="" />
          </div>
        </div>
      </div>
      )}
      {step === 2 && (
        <div>
          <div className="form-group">
          <label for="positonInput">Skills Required</label>
            <input type="text" className="form-control" id="positionInput" value={formData.skills_required} name='skills_required' onChange={handleInputChange} placeholder="" />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Intern’s Responsibilities</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name='intern_responsibilites' value={formData.intern_responsibilites} onChange={handleInputChange} rows="3"></textarea>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center pt-4">
        {step ===1 ? (
          <button type="button" className="btn btn-dark" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  )
}

export default Form
