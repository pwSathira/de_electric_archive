import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Pages.css";


export const Quotes = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://formspree.io/f/meqbrbyq", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        }).then(response => {
            if (response.ok) {
                navigate('/'); // Redirect to homepage
            } else {
                console.error("Failed to submit form");
            }
        });
    }

    return (
        <div className='MainContainer'>
            <h1 className="Heading2">Request a Quote</h1>
            <div className='QuotesContainer'>
                <form className='FormClass' onSubmit={handleSubmit}>
                    <div>
                        <input className="qInput" type="text" id="name" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <input className="qInput" type="email" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <textarea className="qMessage" id="message" name="message" value={message} placeholder="Message" onChange={e => setMessage(e.target.value)} />
                    </div>
                    <button className="qButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
