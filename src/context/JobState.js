import React, { useState } from "react";
import jobContext from './jobContext';


const JobState = (props) => {
    const host = "https://job-page.onrender.com"
    const [jobs, setJobs] = useState([]);

    //Get All Jobs 
    const getJobs = async () => {
        const res = await fetch(`${host}/api/jobs/fetchalljobs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await res.json();
        setJobs(json);
    }

    // Add Job
    const addJob = async (position, company_name, job_pipeline,
        add_location, experience, min_salary, max_salary, skills_required,
        intern_responsibilites) => {
        const res = await fetch(`${host}/api/jobs/addjob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                position, company_name, job_pipeline,
                add_location, experience, min_salary, max_salary, skills_required,
                intern_responsibilites
            })
        });
        const job = await res.json();
        setJobs(jobs.concat(job));
    }

    //Update Job
    const updateJob = async (id, position, company_name, job_pipeline,
        add_location, min_salary, max_salary, skills_required,
        intern_responsibilites) => {
        const res = await fetch(`${host}/api/jobs/updatejob/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                position, company_name, job_pipeline,
                add_location, min_salary, max_salary, skills_required,
                intern_responsibilites
            })
        });
        let newJob = JSON.parse(JSON.stringify(jobs));
        for (let i = 0; i < newJob.length; i++) {
            const element = newJob[i];
            if (element._id === id) {
                newJob[i].position = position;
                newJob[i].company_name = company_name;
                newJob[i].job_pipeline = job_pipeline;
                newJob[i].add_location = add_location;
                newJob[i].min_salary = min_salary;
                newJob[i].max_salary = max_salary;
                newJob[i].skills_required = skills_required;
                newJob[i].intern_responsibilites = intern_responsibilites
                break;
            }
        }
        setJobs(newJob);
    }

    //Delete Job
    const deleteJob = async (id) => {
        const res = await fetch(`${host}/api/jobs/deletejob/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const newJobs = jobs((job) => { return job._id !== id });
        setJobs(newJobs)
    }

    return (
        <jobContext.Provider value={{ jobs, getJobs, addJob, updateJob, deleteJob }}>
            {props.children}
        </jobContext.Provider>
    )
}

export default JobState;