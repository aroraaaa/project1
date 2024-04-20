import React from 'react'
import './About.css'
import ab from '../../assets/about.png'
import pl from '../../assets/play-icon.png'

const About = ({setplaystate}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={ab} alt="" className='about-img'/>
        <img src={pl} alt="" className='play-icon' onClick={()=>{setplaystate(true)}}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leader's Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, assumenda facilis nulla molestias possimus non commodi repellendus! Facere quasi voluptatum delectus! Voluptate neque nulla laborum laudantium sapiente dignissimos. Exercitationem, reiciendis?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, rem modi architecto molestias velit facilis voluptatem nemo temporibus, possimus beatae doloribus autem, illum earum? Minima iste aliquam illum totam qui!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus aut doloremque dolor harum. Eveniet ratione omnis dolorum maxime doloremque praesentium voluptatum quis quaerat. Consequuntur minus impedit sunt alias recusandae?</p>
      </div>
    </div>
  )
}

export default About
