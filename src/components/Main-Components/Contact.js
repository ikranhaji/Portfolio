import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dtkg7vx', 'template_mw764no', form.current, 'mkHyqE0BSknDRMSzl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    useEffect(() => {
        AOS.init({ duration: 1300 })
    }, [])
    return (
        <section className="contact-area page-section scroll-content" id="contact">
            <div className="custom-container">
                <div className="contact-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-dollar-sign"></i> Contact
                        </h4>
                    </div>
                    <p id="required-msg">* Marked fields are required to fill.</p>
                    <form ref={form} onSubmit={sendEmail} className="contact-form scroll-animation" data-aos='fade-up' method="POST" action="mailer.php">
                        <div className="alert alert-success messenger-box-contact__msg" style={{ display: 'none' }} role="alert">
                            Your message was sent successfully.
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label for="full-name">Full Name <sup>*</sup></label>
                                    <input type="text" name="user_name" id="user_name" placeholder="Full Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label for="email">Email <sup>*</sup></label>
                                    <input type="email" name="user_email" id="user_email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label for="subject">Subject<sup>*</sup></label>
                                    <input type="text" name="subject" id="subject" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label for="phone_number">phone <span>(optional)</span></label>
                                    <input type="text" name="phone_number" id="phone_number" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label for="message">Message<sup>*</sup></label>
                                    <textarea name="message" id="message" placeholder="Write your message here ..."></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group submit-btn-wrap">
                                    <button className="theme-btn" name="submit" type="submit" id="submit-form">send message</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}
