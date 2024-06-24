import React from 'react'
// import Header from '../Modules/Header/Header.jsx'
import HeroBanner from '../Modules/HeroBanner/HeroBanner.jsx'
import Header3 from '../Modules/Header/Header3.jsx'
import Platform from '../Modules/Platforms/Platforms.jsx'
import Benefits from '../Modules/Benefits/Benefits.jsx'
import Commitment from '../Modules/commitment/commitment.jsx'
import Gratitude from '../Modules/Gratitude/Gratitude.jsx'
import Contact from '../Modules/Contact/Contact.jsx'
import Footer from '../Modules/Footer/Footer.jsx'
import SwMedia from '../Modules/SwMedia/SwMedia.jsx'
import Faq from '../Modules/Faq/Faq.jsx'


const Page = () => {
  return (
    <div>
      {/* <Header /> */}
      <Header3/>

      <HeroBanner />
      <SwMedia/>
      <Platform/>
      <Benefits/>
      <Commitment/>
      <Gratitude/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Page
