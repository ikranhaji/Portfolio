import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="about-area page-section scroll-to-page" id="about">
            <div className="custom-container">
                <div className="about-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="lar la-user"></i> About
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>Every great design begin with<br />
                            an even <span>better story</span></h1>
                    </div>
                    <p className="scroll-animation" data-aos='fade-up'>Born in Kenya and coming to the US at a young age,
                        I initially aspired to become a social worker because I wanted to help people, especially those who,
                        like me, had started with very little. I pursued this passion and became a social worker for a while,
                        making a positive impact on individuals and communities in need.</p>
                    <p>However, destiny had other plans for me. As I settled into my new environment,
                        I began exploring various interests, and it was during this time that I stumbled upon coding.
                        I started playing around with programming languages and building small projects, and before I knew it,
                        I was completely captivated by the world of web development. The ability to create digital solutions that
                        could positively impact people's lives resonated deeply with me.  I continued to hone my skills through practical
                        projects and individual clients. However, my thirst for knowledge led me to join a prestigious bootcamp, where I further
                        enhanced my expertise and gained a solid foundation in full stack web development. With a passion for creating innovative
                        solutions, I am proficient in designing and implementing responsive web applications, building robust RESTful APIs, and
                        crafting user-friendly interfaces using modern JavaScript frameworks like React. I am dedicated to continuous growth,
                        staying updated with the latest trends and technologies. If you are seeking a dedicated and versatile Full Stack Web Developer,
                        I invite you to connect with me and let's collaborate to bring your web development projects to life.</p>
                </div>
            </div>
        </section>
    )
}
