import React from 'react'
import './Contact.css'

export default function Contact(){
    return(
        <div className='Contact-Container'>
            <div className='Contact-Cover'>
                <h1>Contact Us</h1>
                <p>Please fill this form in a decent manner.</p>
                <div style={{marginTop: '50px'}}></div>
                <p>Full Name *</p>
                <div className='Contact-Name'>
                    <div className='Contact-FirstName'>
                    <input
                        placeholder='Ex. John'
                        className='inputBox'
                    />
                    <p>First Name</p>
                    </div>
                    <div className='Contact-LastName'>
                    <input
                        placeholder='Ex. John'
                        className='inputBox'
                    />
                    <p>Last Name</p>
                    </div>
                </div>
                <p>E-mail *</p>
                <div className='Contact-Email'>
                    <input
                        placeholder='john.doe@gmail.com' 
                        className='inputBox'
                    />
                    <p>Email</p>
                </div>
                <p>Message *</p>
                <div className='Contact-Message'>
                    <input 
                    className='inputBox'
                    />
                </div>
                <button className='button'>Submit</button>
            </div>
        </div>
    )
}