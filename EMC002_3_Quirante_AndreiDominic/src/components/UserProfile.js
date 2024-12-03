/*Author: Andrei Dominic B. Quirante*/
import React from 'react'
import './UserProfile.css'
const Text = ({
    illust,
    name,
    age,
    location
}) => {
    return (
        <div>
            <div className='UP-Container'>
                <div className='UP-Content'>
                    <div className='UP-Illust'>
                        <img src={illust} alt={`${name}'s profile`} />
                    </div>
                    <div className='UP-Name'>
                        <p>{name}</p>
                    </div>
                    <div className='UP-Age'>
                        <p>Age: {age}</p>
                    </div>
                    <div className='UP-Location'>
                        <p>Location: {location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Text; 
