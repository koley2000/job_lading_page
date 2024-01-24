import React from 'react'


function Card(props) {
    const {job} = props
    return (
        <div className="card" style={{ width: '18rem', }}>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-subtitle mb-2 pt-2">{job.position}</h5>
                    <div className="dropdown">
                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">View</a></li>
                            <li><a className="dropdown-item" href="/">Edit</a></li>
                            <li><a className="dropdown-item" href="/">Close Job</a></li>
                        </ul>
                    </div>
                </div>
                <div className='pt-3'>
                    <p className="card-text"><i className="fa-solid fa-location-dot pe-2" style={{ color: '#1C212D' }}></i>{job.add_location}</p>
                    <p className="card-text"><i className="fa-solid fa-tag pe-2" style={{ color: '#1C212D' }}></i>{job.min_salary}</p>
                    <p className="card-text"><i className="fa-solid fa-business-time pe-2" style={{ color: '#1C212D' }}></i>{job.experience} Years</p>
                </div>
            </div>
        </div>
    )
}

export default Card
