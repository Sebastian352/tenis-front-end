import Admin from './Admin'
import './App.css'
import Login from './Login'
import { Routes, Route } from "react-router-dom"
import SignUp from './SignUp'
import MainPage from './MainPage'

function requireAuth(nextState, replace, next) {
  if (!authenticated) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname }
    });
  }
  next();
}

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainPage />} onEnter={requireAuth} />
        <Route path="/admin" element={<Admin />} onEnter={requireAuth} />
      </Routes>
    </div>
  )

}

export default App
