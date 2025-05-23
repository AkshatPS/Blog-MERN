import React, { useState } from 'react';
import './contact.css';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple form validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }

        // Simulate a form submission request
        console.log('Form submitted:', formData);
        setStatus('Your message has been sent!');

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contactContainer">
            <h1 className="contactHeader">
                Contact Us
            </h1>
            <p>
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                    ></textarea>
                </div>

                <button type="submit" className="formSubmitButton">Send Message</button>

                {status && <p className="statusMessage">{status}</p>}
            </form>
        </div>
    )
}
