import * as React from 'react'
import Accordion from '../components/Accordion'
import Feature from '../components/Feature'
import '../components/global.css'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Feature />
      <Tabs />
      <Accordion />
    </main>
  )
}

export default IndexPage
