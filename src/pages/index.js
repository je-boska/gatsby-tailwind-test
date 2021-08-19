import * as React from 'react'
import Accordion from '../components/Accordion'
import Feature from '../components/Feature'
import '../components/global.css'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import { Helmet } from 'react-helmet'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Test Industries</title>
      </Helmet>
      <Navbar />
      <Feature />
      <Tabs />
      <Accordion />
    </main>
  )
}

export default IndexPage
