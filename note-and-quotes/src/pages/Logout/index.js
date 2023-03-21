import React from 'react'

function Logout() {
    window.localStorage.clear();
    window.location.href = 'https://kjr-notes-and-quotes.herokuapp.com/login';
    
    return (
        <button onClick={Logout}>Logout</button>
        )
    }
export default Logout;

