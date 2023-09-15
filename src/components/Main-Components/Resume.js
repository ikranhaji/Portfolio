import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
                <div className="resume-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-briefcase"></i> Resume
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                    </div>

                    <div className="resume-timeline">
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">2023 - 2023</span>
                            <h2>Advanced Software Engineering Certificate</h2>
                            <p>Hack Reactor</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-left'>
                            <span className="date">2020 - 2023</span>
                            <h2>Project For Pride In Living</h2>
                            <p>Family Resource Specialist</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">2018-2019</span>
                            <h2>Administrative Assistant</h2>
                            <p>Midwest Transportation LLC</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">2014 - 2018</span>
                            <h2>Bachelor Degree of Arts</h2>
                            <p>University of Minnesota- Twin cities</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
