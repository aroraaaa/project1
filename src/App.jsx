import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playstate,setplaystate] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
          <Title subTitle='Our Program' title='What We Offer'/>
          <Programs />
          <About setplaystate={setplaystate}/>
          <Title subTitle='Gallery' title='Campus Photos'/>
          <Campus/>
          <Title subTitle='Testimonials' title='What Student Says'/>
          <Testimonials/>
          <Title subTitle='Contact us' title='Get in Touch'/>
          <Contact/>
          <Footer/>
          <VideoPlayer playstate={playstate} setplaystate={setplaystate}/>
      </div>
    </div>
  )
}

export default App
