import React from 'react'
import "../assets/styles/top_head.css";
const TopHead = ({content,seeall}) => {
  return (
    <div className='head'>
          <h1 className="title">{content} {seeall === true ? <span className='see_all'>See all</span> : null}</h1>
          <div className="svg">
            <svg
            id="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="18"
              viewBox="0 0 46 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28 9C28 1.5885 29.5885 -7.17369e-07 37 -3.93402e-07C44.4115 -6.94355e-08 46 1.5885 46 9C46 16.4115 44.4115 18 37 18C29.5885 18 28 16.4115 28 9ZM36.0303 12.5303L39.0303 9.53033C39.3232 9.23744 39.3232 8.76256 39.0303 8.46967L36.0303 5.46967C35.7374 5.17678 35.2626 5.17678 34.9697 5.46967C34.6768 5.76256 34.6768 6.23744 34.9697 6.53033L37.4393 9L34.9697 11.4697C34.6768 11.7626 34.6768 12.2374 34.9697 12.5303C35.2626 12.8232 35.7374 12.8232 36.0303 12.5303Z"
                fill="#D1D1D1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9C18 1.5885 16.4115 -7.17369e-07 9 -3.93402e-07C1.5885 -6.94355e-08 6.94355e-08 1.5885 3.93402e-07 9C7.17369e-07 16.4115 1.5885 18 9 18C16.4115 18 18 16.4115 18 9ZM9.96967 12.5303L6.96967 9.53033C6.67678 9.23744 6.67678 8.76256 6.96967 8.46967L9.96967 5.46967C10.2626 5.17678 10.7374 5.17678 11.0303 5.46967C11.3232 5.76256 11.3232 6.23744 11.0303 6.53033L8.56066 9L11.0303 11.4697C11.3232 11.7626 11.3232 12.2374 11.0303 12.5303C10.7374 12.8232 10.2626 12.8232 9.96967 12.5303Z"
                fill="#D1D1D1"
              />
            </svg>
          </div>
    </div>
  )
}

export default TopHead