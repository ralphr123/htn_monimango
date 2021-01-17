import React, { useState } from 'react';
import './PersonalDetailsForm.css';

import axios from 'axios';

export default function PersonalDetailsForm(){

    const postNewsLetter = (e, number, name, email) => {
        e.preventDefault();
        document.getElementById("form").reportValidity();
        if (!document.getElementById("form").checkValidity()) return false;
        axios({
            method: 'post',
            url: 'https://wicked-phantom-05767.herokuapp.com/https://cryptic-woodland-77043.herokuapp.com/newsletter',
            data: {
                number: "15877183475"
            }
        }).then((response) => {
            window.localStorage.setItem("mm_user", JSON.stringify({ number, name, email }));
            window.location.replace("/main");
            return false;
        })
    }

    const initialFormState = {
        name: '',
        email: '',
        number: ''
    }

    const[form, setForm] = useState(initialFormState);

    function handleInputChange(event) {
        const  { name, value } = event.target;
        setForm(prevState => ({ 
            ...prevState,
            [name]: value,
        }));
    
    }
    
    return (
        <form id="form" className="form">
            <input type="text" name="name" value={form.name} required onChange={(e) => handleInputChange(e)} placeholder= "Full Name"/>
            <input type="email" name="email" value={form.email} required onChange={(e) => handleInputChange(e)} placeholder="Email Address"/>
            <input type="tel" name="number" value={form.number} required onChange={(e) => handleInputChange(e)} placeholder="Phone Number"/>
            <span className="form-consent">By submitting this form, you consent to recieving bi-weekly updates on top stocks by SMS for the next 30 days.</span>
            <button className="continue" type="submit" onClick={(e) => postNewsLetter(e, form.number, form.name, form.email)}>Continue</button>
        </form>  
    )

}