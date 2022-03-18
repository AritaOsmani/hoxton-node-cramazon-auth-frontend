import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Basket, User } from '../Types'

type Props = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    basket: Basket[]
    setBasket: React.Dispatch<React.SetStateAction<Basket[]>>
}

export default function Header({ user, setUser, basket, setBasket }: Props) {
    const navigate = useNavigate()
    const [dropDown, setDropdown] = useState('')

    function logOut() {
        localStorage.removeItem('token')
        setUser(null)
        setBasket([])
    }

    if (user) {
        return (
            <div className='header'>
                <h1>Cramazon</h1>
                <ul className='first-ul'>
                    <li onClick={() => {
                        navigate('/')
                    }}>Home</li>
                    <li onClick={() => {
                        navigate('/basket')
                    }}>Basket</li>
                </ul>
                <ul className='user-ul' onClick={() => {
                    if (dropDown !== '') {
                        setDropdown('')
                    } else {
                        setDropdown('active')
                    }

                }}>
                    <li>
                        <i className="fas fa-user"></i>
                        <span>{user.name}</span>
                        <i className="fal fa-angle-down" ></i>
                    </li>
                </ul>
                {dropDown ? <div className='acc-info'>
                    <button>My Account</button>
                    <button onClick={() => {
                        logOut()
                        setDropdown('')
                    }}>Log out</button>
                </div> : null}


            </div>
        )
    }

    return (
        <div className='header'>
            <h1>Cramazon</h1>
            <ul className='first-ul'>
                <li onClick={() => {
                    navigate('/')
                }}>Home</li>
                <li >Basket</li>
            </ul>
            <ul className='second-ul'>
                <li>
                    <button className='login-btn' onClick={() => {
                        navigate('/login')
                    }}>Log in</button>
                </li>
                <li>
                    <button className='signup-btn' onClick={() => {
                        navigate('/signup')
                    }}>Sign up</button>
                </li>
            </ul>

        </div>
    )




}
