import React from 'react'
import Background from '../images/background.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import iphone from '../images/iphone.png'
import samsung from '../images/samsung.jpg'
import xiaomi from '../images/xiaomi.jpeg'
import airpods from '../images/airpods.jpg'
import aksesuar from '../images/kılıf.jpg'

export const Home = () => {
  return (
    <div className='background-container'>
     <div className='container'>
    <div className='frame'>
      <div className='image'>
        <div className='iphone'>
          <div className='image-container'>
           <Link to="/iphone">
           <img src={iphone}/>
            <div className='overlay'>
              <button className='button'>İphone</button>
            </div>
           </Link>
         </div>
        </div>
        <div className='samsung'>
          <div className='image-container'>
          <Link to="/samsung">  
            <img src={samsung}  />
            <div className='overlay'>
              <button className='button' >Samsung</button>
            </div>
            </Link>
          </div>
        </div>
        {/* <div className='xiaomi'>
          <div className='image-container'>
          <Link to="/xiaomi">  
            <img src={xiaomi}  />
            <div className='overlay'>
              <button className='button' >Xiaomi</button>
            </div>
            </Link>
          </div>
        </div> */}
        <div className='airpods'>
          <div className='image-container'>
          <Link to="/airpods">  
            <img src={airpods}  />
            <div className='overlay'>
              <button className='button' >Airpods</button>
            </div>
            </Link>
          </div>
        </div>
        <div className='airpods'>
          <div className='image-container'>
          <Link to="/aksesuar">  
            <img src={aksesuar}  />
            <div className='overlay'>
              <button className='button' >Aksesuarlar</button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
     </div>
)
}
