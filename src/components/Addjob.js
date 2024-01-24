import React from 'react'
import Form from './Form'

function Addjob() {
    return (
        <>
            <div className='d-flex justify-content-between py-4'>
                <p id='title'>Active Jobs</p>
                <div className='side-option'>
                    <button type="button" className="btn btn-light me-2" id='switch'><div className="form-check form-switch">Active
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div></button>
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-dark" id='btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Create Job</button>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title" id="ModalLabel">Create Job</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center py-5">
                            <button type="button" className='d-flex flex-column align-items-center  py-3 px-5' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 88 88" fill="none">
                                    <g clipPath="url(#clip0_1_1015)">
                                        <path d="M31.1124 17.434V13.6531C31.1124 12.9699 31.6684 12.4144 32.3512 12.4144H55.6487C56.3318 
                                        12.4144 56.8874 12.9703 56.8874 13.6531V17.434C56.8874 18.1172 56.3314 18.6728 55.6487 18.6728H32.3516C31.6684 
                                        18.6731 31.1124 18.1172 31.1124 17.434ZM51.1477 6.59513C50.8497 2.90962 47.7613 0 44.0001 0C40.2389 0 37.1505 
                                        2.90962 36.8525 6.59513H51.1477ZM74.6062 21.4668V80.1762C74.6062 84.4902 71.0964 88 66.7824 88H21.2178C16.9038 88 
                                        13.394 84.4902 13.394 80.1762V21.4668C13.394 17.1528 16.9038 13.643 21.2178 13.643H25.2936C25.2936 13.6465 25.2932 
                                        13.65 25.2932 13.6531V17.434C25.2932 21.3259 28.4597 24.492 32.3512 24.492H55.6487C59.5406 24.492 62.7066 21.3259 62.7066 
                                        17.434V13.6531C62.7066 13.6496 62.7062 13.6461 62.7062 13.643H66.782C71.0964 13.643 74.6062 17.1528 74.6062 21.4668ZM34.2106 
                                        55.6509C32.8427 54.8079 31.05 55.2331 30.207 56.601L27.4556 61.0639L26.0354 59.9451C24.7737 58.9508 22.9434 59.1684 21.9495 
                                        60.4308C20.9552 61.6936 21.1728 63.5228 22.4352 64.5171L26.4198 67.6552C26.9366 68.0621 27.5716 68.2786 28.2199 68.2786C28.389 
                                        68.2786 28.5594 68.2639 28.7285 68.234C29.5451 68.0889 30.2617 67.602 30.697 66.896L35.1607 59.6545C36.0041 58.2866 35.5785 
                                        56.4943 34.2106 55.6509ZM34.2106 34.7016C32.8427 33.8582 31.05 34.2842 30.207 35.6517L27.4556 40.1147L26.0354 38.9958C24.7737 38.0019 
                                        22.9434 38.2192 21.9495 39.4816C20.9552 40.7443 21.1728 42.5735 22.4352 43.5678L26.4198 46.7059C26.9366 47.1129 27.5716 47.3294 28.2199 
                                        47.3294C28.389 47.3294 28.5594 47.3146 28.7285 47.2848C29.5451 47.1397 30.2617 46.6528 30.697 45.9467L35.1607 38.7057C36.0041 37.3374 
                                        35.5785 35.545 34.2106 34.7016ZM64.3445 65.3694C64.3445 63.7621 63.0422 62.4598 61.4349 62.4598H42.4254C40.8185 62.4598 39.5158 63.7621 
                                        39.5158 65.3694C39.5158 66.9767 40.8185 68.279 42.4254 68.279H61.4349C63.0422 68.279 64.3445 66.9767 64.3445 65.3694ZM64.3445 44.4202C64.3445 
                                        42.8129 63.0422 41.5105 61.4349 41.5105H42.4254C40.8185 41.5105 39.5158 42.8129 39.5158 44.4202C39.5158 46.0274 40.8185 47.3298 42.4254 
                                        47.3298H61.4349C63.0422 47.3298 64.3445 46.0274 64.3445 44.4202Z" fill="#5956E9" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1015">
                                            <rect width="88" height="88" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='pt-3'>Post Job</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h1 class="modal-title fs-3" id="exampleModalToggleLabel2">Create Job</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex justify-content-center py-5">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addjob
