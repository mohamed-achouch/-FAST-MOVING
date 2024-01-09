import React from 'react'
import "../assets/styles/reviews.css";
import TopHead from './TopHead';
import Rev from './Rev';
import reviews from '../reviews';
const Reviews = () => {
  return (
    <div className='reviews'>
      <div className="container">
      <TopHead content="Latest Reveiws" seeall={true}/>
       <div className="content">
        {
          reviews.map((item) => (
            <Rev key={item.id} image={item.image} title={item.title} adress={item.adress} date={item.date} desc={item.desc} />
          ))
        }
       
       </div>
      </div>
    </div>
  )
}

export default Reviews