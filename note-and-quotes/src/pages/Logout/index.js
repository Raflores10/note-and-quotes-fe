import React from 'react'

function Logout() {
    window.localStorage.clear();
    window.location.href = 'http://localhost:3000/login';
    
    return (
        <button onClick={Logout}>Logout</button>
        )
    }
export default Logout;

