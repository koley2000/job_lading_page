import React from 'react'
import profile from '../images/profile.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">JobDekho</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <button className="btn" type="submit"><i className="fas fa-search"
                            aria-hidden="true"></i></button>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <i className="fas fa-light fa-bell fa-xl pe-3" style={{color: '#FFD43B'}}></i>
                <img id='profile-pic' src={profile} alt="" width="49px" height="49px" />
            </div>
        </nav>
    )
}
