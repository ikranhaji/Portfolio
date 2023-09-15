import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
            resizeDuration: 200,
            fadeDuration: 600,
            imageFadeDuration: 600,
            wrapAround: true
        });
    }, []);
    return (
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-grip-vertical"></i> portfolio
                        </h4>
                        <h1 className="scroll-animation">Featured <span>Projects</span></h1>
                    </div>
                    <div className="row portfolio-items">
                        <h2>Wanderwise</h2>
                        <p>This project utilizes OpenAI's language model to generate personalized  recommendations
                            for users based on their input of location and interests. Users provide their preferences,
                            and this system processes this information,  to offer real-time suggestions such as restaurants,
                            events, or activities, enhancing their experiences and saving them time. This AI-powered recommendation
                            system adapts to changing interests and locations, creating a dynamic and engaging user experience that
                            encourages exploration and discovery.</p>
                        <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                            <div className="portfolio-item portfolio-full">
                                <div className="portfolio-item-inner">
                                    <a href="https://gitlab.com/ikranhaji/wander-wise"><img src="../assets/images/wanderwise.png" alt="Portfolio" /></a>
                                </div>
                            </div>
                        </div>
                        <h2>DrivenCare</h2>
                        <p>DrivenCare is your all-in-one solution for managing every aspect of an automobile dealership.
                            It encompasses robust inventory management to keep track of your vehicle stock, efficient
                            sales management tools to streamline the sales process, and comprehensive service management
                            capabilities for handling customer service requests, repairs, and maintenance. With these
                            essential features seamlessly integrated into one advanced application, automobile dealerships
                            can maximize their efficiency, improve customer service, and ultimately drive their business to new heights.</p>
                        <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="https://gitlab.com/ikranhaji/drivencare">
                                        <img src="../assets/images/drivencare.png" alt="portfolio" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                            <h2>Connect Con</h2>
                            <p>Introducing ConnectCon your all-in-one conference management solution.
                                With This App, effortlessly keep track of conferences, presentations,
                                and attendees in one streamlined platform. Manage conferences, monitor
                                presentations, and engage attendees with ease, making conference organization
                                a breeze.</p>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="https://gitlab.com/ikranhaji/connectcon"><img src="../assets/images/connectcon.png" alt="portfolio" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
