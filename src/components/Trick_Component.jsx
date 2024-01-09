import React from 'react'

const Trick_Component = ({image,title,desc}) => {
  return (
    <div className='trick_component'>
        <div className="image">
        <img src={image} alt="" />
        </div>
      <div className="info">
      <h1>{title}</h1>
        <div className="line"></div>     
        <p>{desc}</p>
        <a href="/">Reed More</a>
        <svg  xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
  <path d="M1.38021 2.01938e-07L6 4.5268L1.38021 9.05345L3.33961e-07 7.64014L3.17734 4.5268L6.17781e-08 1.41332L1.38021 2.01938e-07Z" fill="#BBBBBB"/>
</svg>
      </div>
    </div>
  )
}

export default Trick_Component