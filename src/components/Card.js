import React, { useContext, useState } from 'react'
import ViewModal from './ViewModal';
import jobContext from '../context/jobContext'
import UpdateForm from './UpdateForm';


function Card(props) {
    const { job } = props
    const [show, setShow] = useState(false);
    const [eshow, esetShow] = useState(false);

    const context = useContext(jobContext);
    const {  deleteJob } = context;

    return (
        <div className="card" style={{ width: '18rem', }}>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-subtitle mb-2 pt-2">{job.position}</h5>
                    <div className="dropdown">
                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul className="dropdown-menu position-absolute">
                            <li><button className="dropdown-item" onClick={() => setShow(true)}>View</button>
                                <ViewModal show={show} handleClose={() => setShow(false)} jobDel={job} /></li>
                            <li><button className="dropdown-item" onClick={() => esetShow(true)}>Edit</button>
                                 <UpdateForm eshow={eshow} ehandleClose={() => esetShow(false)} jobDel={job}/></li>
                            <li><button className="dropdown-item" onClick={() => deleteJob(job._id)}>Close Job</button></li>
                        </ul>
                    </div>
                </div>
                <div className='pt-3'>
                    <p className="card-text"><i className="fa-solid fa-location-dot pe-2" style={{ color: '#1C212D' }}></i>{job.add_location}</p>
                    <p className="card-text"><i className="fa-solid fa-tag pe-2" style={{ color: '#1C212D' }}></i>{job.min_salary} - {job.max_salary}</p>
                    <p className="card-text"><i className="fa-solid fa-business-time pe-2" style={{ color: '#1C212D' }}></i>{job.experience} Years</p>
                </div>
            </div>
        </div>
    )
}

export default Card
