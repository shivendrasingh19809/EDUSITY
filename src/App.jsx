import React from 'react'
import Navbar from './Components/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
      </div>
    </div>
  )
}

export default App
