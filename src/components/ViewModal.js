import React from 'react'
import { Modal } from "react-bootstrap";

function ViewModal(props) {
    const { show, handleClose, jobDel } = props;
    return (
        <Modal size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onClose={handleClose} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Job Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className="col">
                        <label htmlFor="positonInput">Position</label>
                        <input type="text" readonly className="form-control" id="positionInput" value={jobDel.position} name='position'  placeholder="" />
                    </div>
                    <div className="col">
                        <label htmlFor="companyNameInput">Company Name</label>
                        <input type="text" readonly className="form-control" id="companyNameInput" value={jobDel.company_name} name='company_name'  placeholder="" />
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <label htmlFor="jobPipelineInput">Job Pipeline</label>
                        <input type="text" readonly className="form-control" id="jobPipelineInput" value={jobDel.job_pipeline} name='job_pipeline'  placeholder="" />
                    </div>
                    <div className="col">
                        <label htmlFor="addLocationInput">Add Location</label>
                        <input type="text" readonly  className="form-control" id="addLocationInput" value={jobDel.add_location} name='add_location'  placeholder="" />
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <label htmlFor="miniSalaryInput">Add Minimum Salary</label>
                        <input type="text" readonly className="form-control" id="miniSalaryInput" value={jobDel.min_salary} name='min_salary'  placeholder="" />
                    </div>
                    <div className="col">
                        <label htmlFor="maxSalaryInput">Add Maximum Salary</label>
                        <input type="text" readonly className="form-control" id="maxSalaryInput" value={jobDel.max_salary} name='max_salary'  placeholder="" />
                    </div>
                </div>

                <div className="col">
                    <label htmlFor="experienceInput">Experience</label>
                    <input type="text" readonly className="form-control" id="experienceInput" value={jobDel.experience} name='experience'  placeholder="" />
                </div>

                <div>
                    <div className="form-group">
                        <label htmlFor="positonInput">Skills Required</label>
                        <input type="text" readonly className="form-control" id="positionInput" value={jobDel.skills_required} name='skills_required'  placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Intern’s Responsibilities</label>
                        <textarea readonly className="form-control" id="exampleFormControlTextarea1" name='intern_responsibilites' value={jobDel.intern_responsibilites}  rows="3"></textarea>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ViewModal
