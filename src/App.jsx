import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Programs from './components/programs/Programs.jsx'
import Title from './components/title/title.jsx'
import About from './components/about/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our program' Title='What We Offer' />
      <Programs/>
        <About/>
        <Title subTitle='Gallery' Title='Campus Photos' />
        <Campus/>
        <Title subTitle='Testimonials' Title='What Student Says' />
        <Testimonials/>
        <Title subTitle='Contact us' Title='Get in Touch' />
        <Contact/>

        <Footer/>
      </div>
    </div>
  )
}

export default App