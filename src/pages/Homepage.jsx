import React from 'react'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import About from '../components/About'
import ProductList from '../components/ProductList'
import BusinessOpportunity from '../components/BusinessOpportunity'
// import ContactForm from './components/ContactForm'

function Homepage() {
  return (
    <div>
      <Nav />
      <Landing />
      <About />
      <ProductList />
      <BusinessOpportunity />
      {/* <ContactForm /> */}
    </div>
  )
}

export default Homepage
