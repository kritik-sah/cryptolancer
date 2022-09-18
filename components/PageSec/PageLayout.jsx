import React from 'react'
import Footer from '../Footers/Footer'
import Navbar from '../Headers/Navbar/Navbar'

const PageLayout = ({children}) => {
  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}

export default PageLayout