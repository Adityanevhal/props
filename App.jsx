import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Pawani" age="20" img="https://i.pravatar.cc/150?img=1"/>
      <Card user="Aditya" age="25" img="https://i.pravatar.cc/150?img=2"/>
      <Card user="Arnav" age="22" img="https://i.pravatar.cc/150?img=3"/>
   
    </div>
  )
}

export default App

