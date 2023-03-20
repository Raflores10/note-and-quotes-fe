import React, {useState} from 'react'
import Container from'react-bootstrap/Container'


function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username,setUsername]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // do something with the response data
        })
        .catch(error => console.error(error));
    }
    return (
        <Container className='auth-form-container d-flex justify-content-center align-items-center'>
        <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type='username' placeholder='' id="username" name='username' />
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id="email" name='email' />
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='********' id='password' name='password' />
            <button type='submit'>Register</button>
        </form>
        </div>
        </Container>
    )
}

export default Register




