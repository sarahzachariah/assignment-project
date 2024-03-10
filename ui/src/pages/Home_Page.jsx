import { useState } from 'react'
import { IxButton } from '@siemens/ix-react';
import '../App.css'

function Home_Page() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='wrapper'>
      <h1>Welcome to the Dashboard</h1>

      <div className='menu-block'>
        <IxButton className="menu-button" variant="primary">
            List Users
        </IxButton>
        <IxButton className="menu-button" variant="primary">
          Create User
        </IxButton>
      </div>
    </div>
    </>
  )
}

export default Home_Page
