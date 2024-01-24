import React, { useContext, useEffect } from 'react'
import '../styles/viewport.css'
import Card from './Card'
import jobContext from '../context/jobContext'
import Addjob from './Addjob'


function Viewport() {
    const context = useContext(jobContext);
    const { jobs, getJobs } = context;

    useEffect(() => {
        getJobs();
    }, [])

    return (
        <>
            <Addjob/>
            <div className='row'>
                {jobs?.map((job) => {
                    return (
                        (<div className='col-2 mx-4 my-3'>
                            <Card key={job._id} job={job} />
                        </div>)
                    )
                })}
            </div>
        </>
    )
}

export default Viewport
