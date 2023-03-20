import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Navigate, useNavigate} from 'react-router-dom';
import './style.css';

const Login = (props) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setUsers(data);
          })
          .catch(error => console.error(error));
      }, [token]);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            fetch('http://localhost:3001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(username)
                console.log(password)
                if (response.token) {
                    // authentication successful, store the token in local storage
                    localStorage.setItem("token", response.token);
                    setToken(response.token);
                } else {
                    // authentication failed, show an error message
                    console.log('Invalid login credentials');
                }
            })
            .catch(error => console.error(error));
        }

    return (
        <Container className='d-flex justify-content-center align-items-center auth-form-container'>
            <div className='auth-form-container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' id="username" name='username' />
                    <label htmlFor='password'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='********' id='password' name='password' />
                    <button type='submit'>Log In</button>
                </form>
            </div>
        </Container>
    );
}

export default Login;