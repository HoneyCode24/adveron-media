import React, { Suspense, lazy } from 'react'

const Hero = lazy(() => import('./components/Hero.jsx'))
const Services = lazy(() => import('./components/Services.jsx'))
const Pricing = lazy(() => import('./components/Pricing.jsx'))
const SocialProof = lazy(() => import('./components/SocialProof.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))

function App() {
  return (
    <Suspense fallback={<div style={{ background: '#080c12', minHeight: '100vh' }} />}>
      <Hero />
      <Services />
      <Pricing />
      <SocialProof />
      <About />
      <Contact />
      <Footer />
    </Suspense>
  )
}

export default App