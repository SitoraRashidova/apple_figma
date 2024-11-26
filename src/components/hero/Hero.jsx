import React from 'react'
import photo from "../../assets/girl.jpg"
import "./Hero.scss"

const Hero = ({bg, title, desc, url, items, cl, button1, button2, images}) => {
  return (
    <div style={{background: `url(${url}) no-repeat center/cover`, color: cl}} className='hero' >
      <h2>{title}</h2>
      <img src={images} alt="hero" />
      <p>{desc}</p>
      <button>{button1}</button>
      <button>{button2}</button>
      <ul>
        {
          items?.map((i,inx)=>{
            <li key={inx}>{i}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Hero