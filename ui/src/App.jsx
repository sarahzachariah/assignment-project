import { useState } from 'react'

import Home_Page from './pages/Home_Page'
import New_User from './pages/New_User'
import User_List from './pages/User_List'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home_Page/> */}
    {/* <New_User/> */}
    <User_List/>
    </>
  )
}

export default App
