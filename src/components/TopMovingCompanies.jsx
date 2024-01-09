import React, { useState } from "react";
import "../assets/styles/top_moving_companies.css";
import companies from "../allCompanies";
import Companie from "./Companie";
const TopMovingCompanies = () => {
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible(companies.length);
  };
  const showLess = () => {
    setVisible(6);
  };


  return (
    <div className="top_companies">
      <div className="container">
       <div className="top_head">
       <div className="title">
          <h1>Top Moving Companies</h1>
          <span>See all</span>
        </div>
        <div className="select_buttons">
          <select name="" id="">
            <option value="">Service</option>
          </select>
          <select name="" id="">
            <option value="">Sort By</option>
          </select>
        </div>
       </div>
        <div className="content">
          {companies.slice(0, visible).map((item, index) => (
            <Companie
              key={index}
              title={item.title}
              rate={item.rate}
              image={item.images}
              adress={item.adress}
              telephone={item.telephone}
              featured={item.featured}
              popular={item.popular}
            />
          ))}
        </div>

        <div className="container">
         
            {visible === companies.length ? (
              <div className="show_more" onClick={showLess}>
                {" "}
                <span>Show less</span>
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
                </svg>{" "}
                </div>
            ) : (
              <div className="show_more" onClick={showMore}>
              {" "}
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
              </svg>{" "}
              </div>
            )}
         
        </div>
      </div>
    </div>
  );
};

export default TopMovingCompanies;
