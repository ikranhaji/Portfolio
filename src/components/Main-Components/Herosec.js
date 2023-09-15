import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Herosec() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="hero-section page-section scroll-to-page" id="home">
            <div className="custom-container">
                <div className="hero-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom" data-aos='fade-up'>
                            <i className="las la-home"></i> Introduce
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'> Hi I'm <span>Ikran</span>, a Full Stack Developer</h1>
                    </div>
                    <p className="scroll-animation" data-aos='fade-up'>Experienced and versatile Full Stack Web Developer with expertise
                        in Python, JavaScript, React, and Django. I have a passion for creating dynamic and intuitive web applications that
                        provide seamless user experiences. With a strong foundation in both front-end and back-end development, I am adept
                        at transforming complex ideas into elegant and scalable solutions.</p>
                    <a href="#portfolio"
                        className="go-to-project-btn scroll-to scroll-animation"
                        data-aos='fade-up'>
                        <img src="../portfolio/assets/images/round-text.png" alt="Rounded Text" />
                        <i className="las la-arrow-down"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}
