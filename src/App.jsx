import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
