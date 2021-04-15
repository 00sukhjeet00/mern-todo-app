import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
export default function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const HandleLogin = () => {
        axios.post('/auth/login', { username: username, password: password })
            .then((res) => {
                const { message, token } = res.data
                if (message)
                    alert(message)
                localStorage.setItem('token', token)
                window.location.href = '/dashboard'
            })
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <form>
                <TextField label="username" value={username} onChange={e => { setUsername(e.target.value) }} /><br />
                <TextField label="password" type="password" value={password} onChange={e => { setPassword(e.target.value) }} /><br /><br />
                <Button onClick={HandleLogin}>login</Button>
            </form>
            <Link to='/register'>Register</Link>
        </div >
    )
}
