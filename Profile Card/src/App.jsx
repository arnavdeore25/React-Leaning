import React from 'react'
import logo from './assets/profile.jpg'
import ProfileCard  from './components/ProfileCard'
import Skills from './components/Skills'
import Button from './components/Button'

function App() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-100'>
      <div className='bg-white p-8 rounded-2x1 shadow-xl w-96 text-center'>
      <img src={logo} alt="" className='w-36 h-36 rounded-full object-cover mx-auto border-4 border-blue-500' />
      <ProfileCard />
      <Skills />
      <Button text="Github" link="https://github.com/arnavdeore25" />
      <Button text="Linked in" link="https://www.linkedin.com/in/arnav-deore/" />
    </div>
    </div>
  )
}

export default App