import React from "react";
import "../assets/styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer_">
      <div className="footer">
        <div className="container">
          <div className="list_footer">
            <div className="box" id="mobile_footer">
              <div className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                >
                  <path
                    d="M11.3792 15.0202C11.3393 15.0202 11.2996 15.0139 11.2611 15.0014L0.260541 11.4338C0.105211 11.3834 0.000138606 11.24 0.000138606 11.078V3.94251C0.000138606 3.78081 0.105211 3.63707 0.260541 3.58676L11.2611 0.0188651C11.3381 -0.00628837 11.4201 -0.00628837 11.497 0.0188651L22.4976 3.58676C22.6533 3.63707 22.758 3.78051 22.758 3.94251V6.11139C22.758 6.31801 22.5885 6.4857 22.3795 6.4857C22.1709 6.4857 22.0011 6.31801 22.0011 6.11139V4.21351L11.3789 0.768376L0.756805 4.21351V10.807L11.3789 14.2518L22.2614 10.7226C22.4613 10.6567 22.6735 10.7654 22.739 10.9615C22.8044 11.158 22.696 11.3694 22.4973 11.4338L11.4967 15.0014C11.4589 15.0139 11.4192 15.0202 11.3792 15.0202Z"
                    fill="black"
                  />
                  <path
                    d="M11.3792 22C11.3393 22 11.2996 21.9937 11.2611 21.9811L0.260537 18.4135C0.0988484 18.3611 -0.00773576 18.2084 0.00043953 18.0404C0.00861482 17.8721 0.129124 17.7302 0.295355 17.6931L5.4697 16.5354C5.67318 16.4884 5.87605 16.6163 5.92207 16.8178C5.9681 17.0193 5.84032 17.2196 5.63655 17.2652L1.79779 18.1243L11.3795 21.2316L22.0016 17.7868V11.0783C22.0016 10.8717 22.1715 10.704 22.3801 10.704C22.5891 10.704 22.7586 10.8717 22.7586 11.0783V18.0581C22.7586 18.2198 22.6536 18.3635 22.4982 18.4138L11.4976 21.9814C11.4589 21.9937 11.4192 22 11.3792 22Z"
                    fill="black"
                  />
                  <path
                    d="M11.3792 22C11.1703 22 11.0007 21.8323 11.0007 21.6257V4.14253C11.0007 3.93592 11.1703 3.76823 11.3792 3.76823C11.5882 3.76823 11.7577 3.93592 11.7577 4.14253V21.6257C11.7577 21.8323 11.5885 22 11.3792 22Z"
                    fill="black"
                  />
                </svg>
                <span>A1 Fast Moving</span>
              </div>
              <ul className="nav">
                <li className="active">
                  <Link className="active" to="home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link>Location</Link>
                </li>
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link>Tips & Tricks</Link>
                </li>
              </ul>
              <ul className="nav_left">
                <li>
                  <Link>
                    <span className="plus">+</span>Add a Company
                  </Link>
                </li>
                <li>
                  <Link>Get quote</Link>
                </li>
              </ul>
              <p>
                2005-2020 © A1 Fast Moving - Top Rated California Moving
                Companies
              </p>
            </div>
            <div className="box" id="box">
              <ul className="moving_servise">
                <li>Moving Services</li>
                <li>
                  <Link>Local Movers</Link>
                </li>
                <li>
                  <Link>Long Distance</Link>
                </li>
                <li>
                  <Link> Movers </Link>
                </li>
                <li>
                  <Link>Office Movers</Link>
                </li>
              </ul>
            </div>
            <div className="box" id="box">
              <ul className="single">
                <li>
                  <Link> Piano Movers</Link>
                </li>
                <li>
                  <Link>State to State</Link>
                </li>
                <li>
                  <Link> Movers </Link>
                </li>
                <li>
                  <Link>Storages</Link>
                </li>
              </ul>
            </div>
            <div className="box" id="box">
              <ul className="moving_servise">
                <li>Locations</li>
                <li>
                  <Link>San Francisco</Link>
                </li>
                <li>
                  <Link> Oakland </Link>
                </li>
                <li>
                  <Link> San Jose</Link>
                </li>
                <li>
                  <Link> San Diego</Link>
                </li>
              </ul>
            </div>
            <div className="box" id="box">
              <ul className="single">
                <li>
                  <Link> Los Angeles</Link>
                </li>
                <li>
                  <Link> Ontario</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a className="go_to_top" href="#go">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 28C2.471 28 0 25.529 0 14C0 2.471 2.471 0 14 0C25.529 0 28 2.471 28 14C28 25.529 25.529 28 14 28ZM19.4916 15.5084L14.825 10.8417C14.3693 10.3861 13.6307 10.3861 13.175 10.8417L8.50838 15.5084C8.05276 15.964 8.05276 16.7027 8.50838 17.1583C8.96399 17.6139 9.70268 17.6139 10.1583 17.1583L14 13.3166L17.8417 17.1583C18.2973 17.6139 19.036 17.6139 19.4916 17.1583C19.9472 16.7027 19.9472 15.964 19.4916 15.5084Z"
              fill="#D1D1D1"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
