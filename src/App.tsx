import { } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className ="layout">
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  )
}

export default App
