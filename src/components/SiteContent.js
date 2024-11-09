import React, { useRef } from 'react'
import Hero from './Hero'
import Services from './Services'
import Footer from './Footer'
import AboutUs from './AboutUs'
import GoogleMap from './GoogleMap'

function SiteContent({services, aboutUs}) {

  return (
    <>
        <Hero/>
        <Services services={services}/>
        <AboutUs aboutUs={aboutUs}/>
        <GoogleMap />
        <Footer />
    </>
    )
}

export default SiteContent