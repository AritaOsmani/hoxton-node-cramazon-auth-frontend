import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignUpForm, User } from '../Types'

type Props = {
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export default function SignUp({ setUser }: Props) {
    const navigate = useNavigate()

    function comparePasswords(pass1: string, pass2: string) {
        return pass1 === pass2
    }
    function signUp(name: string, email: string, password: string) {
        fetch(`http://localhost:4000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name, password })
        }).then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    localStorage.setItem('token', res.token)
                    setUser(res.user)
                }
            })
    }

    return (
        <div className='login-container'>
            <form action="" className='signup-form' onSubmit={(e) => {
                e.preventDefault()
                const formEl = e.target as SignUpForm
                const emailInput = formEl.email.value;
                const nameInput = formEl.name.value;
                const passwordInput = formEl.password.value;
                const confirmPassword = formEl.confirm_pass.value;

                const passwordsMatch = comparePasswords(passwordInput, confirmPassword)
                if (passwordsMatch) {
                    signUp(nameInput, emailInput, passwordInput)
                    formEl.reset();
                    navigate('/')
                } else {
                    alert('Passwords don\'t match. Please try again!')
                }

            }}>
                <h1>Join the world's largest e-shop</h1>
                <input type="text" name="name" placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <input type="password" name='confirm_pass' placeholder='Confirm password' />
                <button type='submit' className='sgn-btn'>Sign Up</button>
            </form>
        </div>
    )
}
