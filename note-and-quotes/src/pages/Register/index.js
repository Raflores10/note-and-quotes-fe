import React, {useState} from 'react'

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username,setUsername]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
        <form>
            <label htmlFor='username'>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type='username' placeholder='' id="username" name='username' />
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id="email" name='email' />
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='********' id='password' name='password' />
            <button type='submit'>Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Log In</button>
        </div>
    )
}

export default Register