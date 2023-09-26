import React, { useState } from 'react';
import "./Pages.css";

export const Quotes = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, message);
    }

    return (
        <div className='MainContainer'>
            <h1 className="Heading2">Request a Quote</h1>
            <div className='QuotesContainer'>
                <form className='FormClass' method="POST" data-netlify="true" name="quoteForm">
                    {/* This hidden input field is essential for Netlify to recognize the form */}
                    <input type="hidden" name="form-name" value="quoteForm" />

                    <div>
                        <input className="qInput" type="text" id="name" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div>
                        <input className="qInput" type="email" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <textarea className="qMessage" id="message" name="message" value={message} placeholder="Message" onChange={e => setMessage(e.target.value)} />
                    </div>

                    <button className="qButton" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};
