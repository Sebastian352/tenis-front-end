import Admin from './Admin'
import './App.css'
import Login from './Login'
import { Routes, Route } from "react-router-dom"
import SignUp from './SignUp'
import MainPage from './MainPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  )

}

export default App
