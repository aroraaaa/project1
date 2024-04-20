import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import u1 from '../../assets/user-1.png'
import u2 from '../../assets/user-2.png'
import u3 from '../../assets/user-3.png'
import u4 from '../../assets/user-4.png'


const Testimonials = () => {
        const slider = useRef();
        let tx=0;
    const slideforward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slidebackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
  return (
    <div className='testimonials'>
      <img src={next} alt="" className='next-btn' onClick={slideforward}/>
      <img src={back} alt="" className='back-btn' onClick={slidebackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={u1} alt="" />
                        <div>
                            <h3>Mily Jackson</h3>
                            <span>Editute, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum reiciendis cum provident veniam earum quod, voluptate asperiores repudiandae corporis.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={u2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Editute, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum reiciendis cum provident veniam earum quod, voluptate asperiores repudiandae corporis.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={u3} alt="" />
                        <div>
                            <h3>Annabelle</h3>
                            <span>Editute, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum reiciendis cum provident veniam earum quod, voluptate asperiores repudiandae corporis.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={u4} alt="" />
                        <div>
                            <h3>Ryan</h3>
                            <span>Editute, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum reiciendis cum provident veniam earum quod, voluptate asperiores repudiandae corporis.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
