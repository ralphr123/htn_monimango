import React, { useState } from 'react';
import './PersonalDetailsForm.css';

import axios from 'axios';

export default function PersonalDetailsForm(){

    const postNewsLetter = (event)=> {
        axios({
            method: 'post',
            url: 'https://wicked-phantom-05767.herokuapp.com/https://cryptic-woodland-77043.herokuapp.com/newsletter',
            data: {
                number: "15877183475"
            }
        });
        // console.log(event);
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
        <>
            <form className="form">
                <input type="text" name="name" value={form.name} onChange={(e) => handleInputChange(e)} placeholder= "Full Name"/>
                <input type="email" name="email" value={form.email} onChange={(e) => handleInputChange(e)} placeholder="Email Address"/>
                <input type="tel" name="number" value={form.number} onChange={(e) => handleInputChange(e)} placeholder="Phone Number"/>
            </form>  
            <button className="continue" type="submit" onClick={() => postNewsLetter(form.number)}>Continue</button>
        </>
    )

}