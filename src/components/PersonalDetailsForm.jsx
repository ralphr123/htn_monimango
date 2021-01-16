import React, { useState } from 'react';

export default function PersonalDetailsForm(){

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
        <form>
            <input type="text" name="name" value={form.name} onChange={handleInputChange} placeholder= "Full Name"/>
            <input type="email" name="email" value={form.email} onChange={handleInputChange} placeholder="Email Address"/>
            <input type="tel" name="number" value={form.number} onChange={handleInputChange} placeholder="Phone Number"/>
        </form>  
    )

}