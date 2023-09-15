import ikran from "./ikran.png"
import React from 'react'

export default function Lsb() {
    return (
        <div className="left-sidebar">
            <img className="me" src={ikran} alt="Me" />
            <h2 className="email">Ikranhaji4@gmail.com</h2>
            <h2 className="address">Minneapolis, MN</h2>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://www.linkedin.com/in/ikran-haji-/"><i class="lab la-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://gitlab.com/ikranhaji"><i class="lab la-gitlab"></i></a>
                </li>
            </ul>
            <a href="#contact" className="theme-btn">
                <i className="las la-envelope"></i> Contact Me!
            </a>
        </div>
    )
}
