import React from "react";
import "../assets/styles/showmore.css";
const ShowMore = () => {
  return (
    <div className="container">
      <div className="show_more">
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M0 1.38021L4.5268 6L9.05345 1.38021L7.64013 0L4.5268 3.17734L1.41332 0L0 1.38021Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default ShowMore;
