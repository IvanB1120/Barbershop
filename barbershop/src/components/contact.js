import React, { useState } from "react";
import '../styles/contact.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div id="contact-container">
            <h1 className="contact-headline">Contact us</h1>
            <div className="contact-flex">
            <div className="contact-left">
            <Fade left>
            <form className="contact-form">
                <h2 className="form-headline">Contact us</h2>
                <div className="form-row">
                <label>
                    First name:
                    <input type="text" name="name" placeholder="first name"/>
                </label>
                <label>
                    Last name:
                    <input type="text" name="name" placeholder="last name"/>
                </label>
                </div>
                <div className="form-row">
                <label>
                    Email:
                    <input type="email" name="name" placeholder="email"/>
                </label>
                <label>
                    Phone number:
                    <input type="text" name="name" placeholder="phone number"/>
                </label>
                </div>
                <label>Date:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </label>
                <label>
                    Time:
                    <select id="cars" name="cars">
                        <option value="8">8:00</option>
                        <option value="9">9:00</option>
                        <option value="10">10:00</option>
                        <option value="10">11:00</option>
                        <option value="8">12:00</option>
                        <option value="9">13:00</option>
                        <option value="10">14:00</option>
                        <option value="10">15:00</option>
                        <option value="10">16:00</option>
                    </select>
                </label>
                <input type="submit" value="Submit" className="contact-button"/>
            </form>
            </Fade>
            </div>
            <div className="contact-right">
                <Fade right>
                <div className="info-section1">
                    <div className="info-section-left">
                        <h2 className="info-headline">Phone number: </h2>
                        <p>Main: (555) 123-4567</p>
                        <p>Appointment Line: (555) 987-6543</p>
                    </div>
                    <div className="info-section-right">
                        <h2 className="info-headline">Email Address: </h2>
                        <p>info@barbershopexample.com</p>
                        <p>bookings@barbershopexample.com</p>
                    </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="info-section2">
                    <div className="info-section-left">
                        <h2 className="info-headline">Physical Address: </h2>
                        <p>123 Main Street</p>
                        <p>Cityville, State 12345, United States</p>
                    </div>
                    <div className="info-section-right">
                        <h2 className="info-headline">Operating Hours:: </h2>
                        <p>Monday-Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday-Sunday: Closed</p>
                    </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <h2 className="right-headline">Where to find us</h2>
                    <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.380402446146!2d-73.99479295035384!3d40.724069452946935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259858271cae1%3A0x1c0922723cf95cfd!2sMy%20WordPress%20Blog!5e0!3m2!1shr!2shr!4v1707476562634!5m2!1shr!2shr">
                    </iframe>
                    </Fade>
            </div>
            </div>
        </div>
    )
}

export default Contact