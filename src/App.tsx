import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import BasketPage from './pages/BasketPage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { Basket, User } from './Types'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [basket, setBasket] = useState<Basket[]>([])

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:4000/validate`, {
        headers: {
          Authorization: localStorage.token
        }
      }).then(res => res.json()).then(res => {
        if (res.error) {
          alert('Valdiation failed')
        } else {
          setUser(res)
        }
      })
    }
  }, [])

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/basket`, {
        headers: {
          Authorization: localStorage.token
        }
      }).then(res => res.json()).then(res => {
        if (res.error) {
          alert(res.error)
        } else {
          setBasket(res)
        }
      })
    }
  }, [user])

  return (
    <div className="App">
      <Header user={user} setUser={setUser} basket={basket} setBasket={setBasket} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<LogIn user={user} setUser={setUser} />} />
        <Route path='/signup' element={<SignUp setUser={setUser} />} />
        <Route path='/basket' element={<BasketPage />} />
      </Routes>

    </div>
  )
}

export default App
