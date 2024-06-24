import React from 'react'
import Headerlogo from '../../images/sw-logo.svg'
import DonateButton from '../../Components/DonateButton/DonateButton.jsx'
import './Header3.scss'

function Header3() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <img src={Headerlogo} className='img-fluid'/></a>
                    <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Watch a video</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">The Impact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Benefits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Testimonials</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQ’S</a>
                            </li>
                            <li class="nav-item my-3 my-lg-0">
                                {/* <a class="nav-link" href="#">FAQ’S</a> */}
                                <DonateButton/>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li> */}
                                    {/* <li><hr class="dropdown-divider"></li> */}
                                    {/* <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header3
