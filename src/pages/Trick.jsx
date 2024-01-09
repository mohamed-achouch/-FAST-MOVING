import React from 'react'
import '../assets/styles/tricks.css'
import { Link } from 'react-router-dom'
import trick from '../trick'
import TrickComponent from '../components/Trick_Component'
import ShowMore from '../components/ShowMore'
import FreeMoving from '../components/FreeMoving'
const Trick = () => {
  return (
    <section className='tricks'>
          <div className="top_head">
            <h1>Tips and Tricks</h1>
          </div>
        <div className="container">
        <ol className="Breadcrumb">
          <li>
            <Link to="/home">Home</Link>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="7"
              viewBox="0 0 4 7"
              fill="none"
            >
              <path
                d="M0.920138 6.05347L4 3.0356L0.920138 0.0178318L0 0.960044L2.11822 3.0356L0 5.11125L0.920138 6.05347Z"
                fill="#ADAFB6"
              />
            </svg>
          </li>
          <li>
            <Link to="/movers">Information</Link>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="7"
              viewBox="0 0 4 7"
              fill="none"
            >
              <path
                d="M0.920138 6.05347L4 3.0356L0.920138 0.0178318L0 0.960044L2.11822 3.0356L0 5.11125L0.920138 6.05347Z"
                fill="#ADAFB6"
              />
            </svg>
          </li>
          <li>
            <Link to="/location">Tips and Tricks</Link>
          </li>
        </ol>
        </div>
        <div className="container">
            <div className="trick_content">
             {
                trick.map((item,index)=> (
                    <TrickComponent key={index} image={item.image} title={item.title} desc={item.desc}/>
                ))
             }
            </div>
            <ShowMore/>
        </div>
        <FreeMoving/>
    </section>
  )
}

export default Trick