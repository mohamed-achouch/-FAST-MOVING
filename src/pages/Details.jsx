import React, { useState } from "react";
import "../assets/styles/details.css";
import { Link, NavLink } from "react-router-dom";
import Qoute from "../components/Qoute";
import companies from "../allCompanies";
import California from "../assets/images/companies/california.png";
import img4 from "../assets/images/companies//A1fastMoving 2/image 4.png";
import img5 from "../assets/images/companies//A1fastMoving 2/image 5.png";
import img6 from "../assets/images/companies//A1fastMoving 2/image 6.png";
import img7 from "../assets/images/companies//A1fastMoving 2/image 7.png";
import LocationMap from "../components/LocationMap";
import reviews from "../reviews";
import Rev from "../components/Rev";
import ShowMore from "../components/ShowMore";
import Companie from "../components/Companie";
import FreeMoving from '../components/FreeMoving'
const Details = () => {
  // const [displayimage, setDisplayImage] = useState(California);
  const [mark, setMark] = useState(0);
  const [index, setIndex] = useState(3);
  console.log(mark);
  const next = () => {
    if (mark < list_images.length - 1) {
      setMark(mark + 1);
    }
  };
  const previous = () => {
    if (mark > 0) {
      setMark(mark - 1);
    }
  };

  const changeDiplayImage = (id, index) => {
    setMark(index);
    console.log(id, index);
  };

  const location = {
    name: "Sample Location",
    lat: 51.505, // Replace with your latitude
    lon: -0.09, // Replace with your longitude
  };
  const list_images = [
    {
      id: 1,
      image: California,
    },
    {
      id: 2,
      image: img4,
    },
    {
      id: 3,
      image: img5,
    },
    {
      id: 4,
      image: img6,
    },
    {
      id: 5,
      image: img7,
    },
  ];
  return (
    <section className="details">
      <div className="head_details">
        <NavLink to="location">
          <svg
            id="back"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M7.69965 3.36563e-07L-3.29788e-07 7.54467L7.69965 15.0891L10 12.7336L4.70444 7.54467L10 2.35553L7.69965 3.36563e-07Z"
              fill="#BBBBBB"
            />
          </svg>
        </NavLink>
        <div className="container">
          <div className="head_">
            <div className="location">
              <div className="content_map">
                <h1>California Movers USA</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                >
                  <path
                    d="M15.3738 0C13.7496 0 12.1449 0.610196 10.9093 1.66794C9.67342 0.61013 8.06864 0 6.44436 0C2.83076 0 0 2.8244 0 6.42995C0 10.7883 3.04132 13.4523 7.64488 17.4847C8.03836 17.8293 8.44446 18.185 8.86234 18.5537C8.86518 18.5563 8.86809 18.5588 8.871 18.5613L10.2609 19.7592C10.4471 19.9198 10.6783 20 10.9094 20C11.1405 20 11.3716 19.9197 11.5579 19.7592L12.9476 18.5612C12.9505 18.5587 12.9533 18.5562 12.9562 18.5537C15.7076 16.1258 17.7706 14.2671 19.2631 12.4544C21.0062 10.3372 21.8182 8.42285 21.8182 6.42995C21.8181 2.8244 18.9874 0 15.3738 0Z"
                    fill="#E0294A"
                  />
                </svg>
              </div>
              <div className="rate_and_reviews">
                <span className="popular">popular</span>
                <span className="review">8 reviews</span>
                <div id="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                      fill="#06965C"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                      fill="#06965C"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                      fill="#06965C"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                      fill="#06965C"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                      fill="#06965C"
                    />
                  </svg>
                </div>
                <span>5.0</span>
              </div>
            </div>
            <div className="adress_and_contact">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                >
                  <path
                    d="M5.625 0C2.5125 0 0 2.5125 0 5.625C0 9.375 5.625 15 5.625 15C5.625 15 11.25 9.375 11.25 5.625C11.25 2.5125 8.7375 0 5.625 0ZM5.625 3.75C6.675 3.75 7.5 4.575 7.5 5.625C7.5 6.675 6.675 7.5 5.625 7.5C4.575 7.5 3.75 6.675 3.75 5.625C3.75 4.575 4.575 3.75 5.625 3.75Z"
                    fill="#06965C"
                  />
                </svg>
                <span>15, One page st., Los Angeles, USA</span>
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
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M6.81709 8.2018C7.23598 8.49687 7.67514 8.74499 8.12781 8.93276C8.40888 9.0347 8.84994 8.74605 9.17425 8.53381C9.25531 8.48076 9.32908 8.43248 9.39123 8.39628L9.41163 8.38482C9.71711 8.21328 10.0563 8.02279 10.4925 8.11462C10.8844 8.1951 12.2289 9.25465 12.6005 9.63019C12.8437 9.87161 12.9788 10.1264 12.9991 10.388C13.0396 11.3604 11.7357 12.4534 11.4249 12.6412C10.7628 13.124 9.87768 13.1173 8.81019 12.6345C7.66838 12.1718 6.30362 11.1994 4.98614 10.0191C4.51453 9.59664 3.60885 8.7071 3.35111 8.41C2.02013 6.9682 0.898584 5.4191 0.371595 4.16507C0.121613 3.63529 0 3.14575 0 2.70986C0 2.28067 0.121613 1.89842 0.358083 1.56983C0.499964 1.3217 1.64177 -0.0329188 2.64846 0.000611917C2.89844 0.0274355 3.15518 0.154851 3.40516 0.396269C3.78351 0.765102 4.87127 2.09961 4.95235 2.49526C5.04485 2.92154 4.85304 3.25803 4.68024 3.56118L4.66858 3.58165C4.62964 3.64893 4.57684 3.72875 4.51911 3.81602C4.30645 4.1375 4.02697 4.55998 4.12741 4.82897C4.37806 5.44593 4.73615 6.04947 5.16787 6.60608C5.647 7.17894 6.3982 7.90673 6.81709 8.2018Z"
                    fill="#06965C"
                  />
                </svg>
                <span>1-510-974-7588</span>
              </div>
            </div>
          </div>
        </div>
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
            <Link to="/movers">Movers</Link>{" "}
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
            <Link to="/location">Location</Link>
          </li>
        </ol>
      </div>
      <div className="container">
        <div className="txt">
          <h1>California Movers USA</h1>
          <div className="content">
            <div className="left">
              <p>
                California Movers USA is a leading moving company throughout the
                state in San Francisco, Los Angeles, San Diego, Sacramento, San
                Jose, Santa Clara, and the other parts of the state. Services
                are offered in all corners of the state. This is a full-service
                mover and packer offering both long-distance and short-distance
                moving for homes and offices, packing, and also storage
                services.
                <br />
                <br /> They can move piano, furniture, appliances, china,
                glassware, electrical gadgets, both regular and high-value
                items. They have small and huge trucks of different sizes,
                blankets, boxes, plastic wraps, and all the tools to make the
                move easy and smooth.
                <br />
                <br /> California Movers USA is a fully licensed and insured
                moving company in the state. The staff members are well trained
                and thorough professionals. The moving solutions are flexible
                and completely customized to the needs of their home or office
                customers. Moves can be scheduled during the week or on the
                weekend, during the daytime or late in the evening, according to
                the client convenience. California Movers USA is a leading
                relocation company in the state now. They have received many
                5-star reviews from both home and office customers.
              </p>
              <div className="pros_cons">
                <ul>
                  <li>Pros</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>{" "}
                    Moves throughout the state
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>{" "}
                    Fully licensed and insured
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>{" "}
                    Both home and office moves
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>
                    Large and small trucks
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>{" "}
                    Timely arrival
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>{" "}
                    Same team load, drive, unload
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>{" "}
                    100% satisfaction guarantee
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#7EDE2C" />
                    </svg>{" "}
                    No hidden costs
                  </li>
                </ul>
                <ul>
                  <li>Cons</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#E1425E" />
                    </svg>{" "}
                    Does not provide international move{" "}
                  </li>
                  <li>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                    >
                      <circle cx="3" cy="3" r="3" fill="#E1425E" />
                    </svg>{" "}
                    Works all over the west coast of the US only
                  </li>
                </ul>
              </div>
              <Qoute />
              <div className="line"></div>
              <ul className="location_list">
                <li>
                  <Link>Local movers</Link>
                </li>
                <li>
                  <Link>Top</Link>
                </li>
                <li>
                  <Link>Companies in San Francisco</Link>
                </li>
                <li>
                  <Link>State to State Movers</Link>
                </li>
                <li>
                  <Link>Storages</Link>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="image">
                <img src={list_images[mark].image} alt="" />
              </div>
              <div className="list_">
                <div className="slider_btn">
                  <svg
                    display={mark === 0 ? true : false}
                    onClick={previous}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 9C18 1.5885 16.4115 -7.17369e-07 9 -3.93402e-07C1.5885 -6.94355e-08 6.94355e-08 1.5885 3.93402e-07 9C7.17369e-07 16.4115 1.5885 18 9 18C16.4115 18 18 16.4115 18 9ZM9.96967 12.5303L6.96967 9.53033C6.67678 9.23744 6.67678 8.76256 6.96967 8.46967L9.96967 5.46967C10.2626 5.17678 10.7374 5.17678 11.0303 5.46967C11.3232 5.76256 11.3232 6.23744 11.0303 6.53033L8.56066 9L11.0303 11.4697C11.3232 11.7626 11.3232 12.2374 11.0303 12.5303C10.7374 12.8232 10.2626 12.8232 9.96967 12.5303Z"
                      fill="#D1D1D1"
                    />
                  </svg>
                  <svg
                    onClick={next}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M-3.93402e-07 9C-6.94355e-08 1.5885 1.5885 -7.17369e-07 9 -3.93402e-07C16.4115 -6.94355e-08 18 1.5885 18 9C18 16.4115 16.4115 18 9 18C1.5885 18 -7.17369e-07 16.4115 -3.93402e-07 9ZM8.03033 12.5303L11.0303 9.53033C11.3232 9.23744 11.3232 8.76256 11.0303 8.46967L8.03033 5.46967C7.73744 5.17678 7.26256 5.17678 6.96967 5.46967C6.67678 5.76256 6.67678 6.23744 6.96967 6.53033L9.43934 9L6.96967 11.4697C6.67678 11.7626 6.67678 12.2374 6.96967 12.5303C7.26256 12.8232 7.73744 12.8232 8.03033 12.5303Z"
                      fill="#D1D1D1"
                    />
                  </svg>
                </div>

                <div className="list_images">
                  {list_images.map((item, index) => (
                    <div
                      key={item.id}
                      className={`image ${index === mark ? "active" : null}`}
                    >
                      <img
                        src={item.image}
                        alt=""
                        onClick={() => changeDiplayImage(item.id, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="location_map">
          <div className="location_map_head">
          <h1>Location</h1>
          <ul>    
            <li>Ontario,</li>
            <li>Los Angeles, </li>
            <li>San Diego,</li>
            <li>San Jose,</li>
            <li>Oakland,</li>
            <li>San Francisco</li>
          </ul>
          </div>
          <LocationMap location={location} />
        </div>
      </div>

      <div className="container">
        <div className="reviews_in_details">
          <div className="rev_in_details">
            <h1>8 Reviews</h1>
            <div className="rate">
              <div className="list_svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                >
                  <path
                    d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                    fill="#06965C"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                >
                  <path
                    d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                    fill="#06965C"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                >
                  <path
                    d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                    fill="#D1D1D1"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                >
                  <path
                    d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                    fill="#D1D1D1"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                >
                  <path
                    d="M5.54894 0.92705C5.8483 0.00573921 7.1517 0.00573993 7.45106 0.927051L8.18386 3.18237C8.31773 3.5944 8.70168 3.87336 9.13491 3.87336L11.5063 3.87336C12.475 3.87336 12.8778 5.11297 12.0941 5.68237L10.1756 7.07624C9.8251 7.33088 9.67845 7.78225 9.81232 8.19427L10.5451 10.4496C10.8445 11.3709 9.78999 12.137 9.00628 11.5676L7.08778 10.1738C6.7373 9.91912 6.2627 9.91912 5.91221 10.1738L3.99372 11.5676C3.21001 12.137 2.15553 11.3709 2.45488 10.4496L3.18768 8.19427C3.32155 7.78225 3.1749 7.33088 2.82441 7.07624L0.905917 5.68237C0.122203 5.11297 0.524979 3.87336 1.4937 3.87336L3.86509 3.87336C4.29832 3.87336 4.68227 3.5944 4.81614 3.18237L5.54894 0.92705Z"
                    fill="#D1D1D1"
                  />
                </svg>

                <span>2.1</span>
              </div>
            </div>
          </div>
          <a className="add_review" href="/">
            add review
          </a>
        </div>

        <div className="content_reviews">
          {reviews.map((item) => (
            <Rev
              key={item.id}
              image={item.image}
              title={item.title}
              adress={item.adress}
              date={item.date}
              desc={item.desc}
            />
          ))}
        </div>
        <ShowMore />
        <div className="related_listings">
          <div className="head_ralated">
            <h1>Related Listings</h1>
            <div>
              <svg
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
          <div className="related_listing">
            {companies.slice(0, index).map((item, index) => (
              <Companie
                className="mover_top"
                key={index}
                title={item.title}
                rate={item.rate}
                image={item.images}
                adress={item.adress}
                telephone={item.telephone}
                featured={item.featured}
                popular={item.popular}
                qoute={false}
              />
            ))}
          </div>
          <ShowMore />
        </div>
      </div>
      <FreeMoving />
    </section>
  );
};

export default Details;
