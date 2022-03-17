import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogInForm, User } from '../Types'

type Props = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}
export default function LogIn({ user, setUser }: Props) {
    const navigate = useNavigate()

    function login(email: string, password: string) {
        fetch(`http://localhost:4000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json()).then(res => {
            if (res.error) {
                alert(res.error)
            } else {
                localStorage.token = res.token
                setUser(res.user)

            }
        })
    }
    return (
        <div className='login-container'>
            <form action="" className='login-form' onSubmit={(e) => {
                e.preventDefault()
                const formEl = e.target as LogInForm;
                const emailInput = formEl.email.value;
                const passwordInput = formEl.password.value;
                login(emailInput, passwordInput)
                formEl.reset()
                navigate('/')

            }}>
                <h1>Log In</h1>
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <button type='submit' className='lg-btn'>Log In</button>
            </form>
        </div>
    )
}
