import React, { useState } from "react";
import "../assets/styles/location.css";
import { Link } from "react-router-dom";
import companies from "../allCompanies";
import Companie from "../components/Companie";
import DropDown from "../components/DropDown";
import FilterAll from "../components/FilterAll";
import ShowMore from "../components/ShowMore";
import FreeMoving from "../components/FreeMoving";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../features/Slices/Slice";
const Location = () => {
  const [getqoute, setGetQoute] = useState(false);
  const [hideShowMore, setHideShowMore] = useState(true);
  const [number, setNumber] = useState(2);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(12);

  const paragContent =
    "Many in the United States are looking for the best moving companies because most people realize the value of professional service. A fully licensed and insured moving company is better at logistics management.  The best movers can pack, load, transport, and unload safely and on  time. The service can also be cheaper than self-moving. They offer  both local and interstate moves. The best movers in San Francisco, San  Diego, and elsewhere in California also offer storage facilities.  Here, we analyze some of the best interstate moving companies and  local movers and packers and publish movers rating and reviews so you  can identify the most reputed businesses easily.";
  const parag = paragContent.split(".").slice(0, number);

  const setNumberOfParagraph = () => {
    const splitParag = paragContent.split(".");
    setNumber(splitParag.length);
    setHideShowMore(false);
  };

  return (
    <section className="locations">
      <div className="moving_companie">
        <h1>Moving Companies in San Jose</h1>
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
        <p className="parag_mobile">
          {parag}...{" "}
          {hideShowMore === true ? (
            <span onClick={setNumberOfParagraph}>Show More</span>
          ) : null}
        </p>
        <p className="parag_desktop">
          {" "}
          Many in the United States are looking for the best moving companies
          because most people realize the value of professional service. A fully
          licensed and insured moving company is better at logistics management.
          The best movers can pack, load, transport, and unload safely and on
          time. The service can also be cheaper than self-moving. They offer
          both local and interstate moves. The best movers in San Francisco, San
          Diego, and elsewhere in California also offer storage facilities.
          Here, we analyze some of the best interstate moving companies and
          local movers and packers and publish movers rating and reviews so you
          can identify the most reputed businesses easily.
        </p>
        <div className="top_mo">
          <div className="list_btn_svg">
            <svg
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
          <h1 className="top_mover_title">Top 3 Movers in San Jose</h1>
        </div>

        <div className="top_movers">
          {companies.slice(3, 6).map((item, index) => (
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
              qoute={true}
            />
          ))}
        </div>
      </div>
      <div className="items">
        <div className="container">
          <div className="sub_head">
            <h1 className="item_found">17 Items Found</h1>
            <div className="list_dropDown">
              <DropDown dropDownName="Service" />
              <DropDown dropDownName="Sort by" />
              <FilterAll dropDownName="All filters" />
            </div>
          </div>
          <div className="found_Items">
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
                qoute={true}
              />
            ))}
          </div>
          <ShowMore onClick={() => setIndex(companies.length)} />
          <p className="para">
            Many in the United States are looking for the best moving companies
            because most people realize the value of professional service. A
            fully licensed and insured moving company is better at logistics
            management. The best movers can pack, load, transport, and unload
            safely and on time. The service can also be cheaper than
            self-moving. They offer both local and interstate moves. The best
            movers in San Francisco, San Diego, and elsewhere in California also
            offer storage facilities.
            <br />
            <br /> Here, we analyze some of the best interstate moving companies
            and local movers and packers and publish movers rating and reviews
            so you can identify the most reputed businesses easily.
            <br />
            <br /> Americans move a lot. Statistics reveal that Americans move
            11.7 times on an average in their lifetime. They move for various
            reasons – a job change, upsizing to a new home, or just to live in a
            new neighborhood. It has also been noticed that younger people move
            more frequently. According to the Annual Social and Economic
            Supplement of the Current Population Survey for 2013, most moves are
            related to housing (48%), followed by family issues (30.3%), and job
            relocations (19.4%).
            <br />
            <br /> The US Census Bureau data reveals that 7.4 million Americans
            moved in 2019. It is common in the state of California as well.
            501,000 people moved into the state in 2019, but many of them were
            foreign nationals. On the other hand, 691,000 local residents
            relocated to other states, with most of them going to Texas,
            Arizona, Washington state, Nevada, and Oregon. Most recently, Elon
            Musk too decided to move out from the Golden State to Texas.
          </p>
        </div>
      </div>
      <FreeMoving />
      {count === true ? (
        <div className="get_qoute_form">
          <div className="content_qoute">
            <div className="cancel" onClick={() => dispatch(setShow())}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <rect
                  y="1.65527"
                  width="2.34077"
                  height="20.2866"
                  transform="rotate(-45 0 1.65527)"
                  fill="#979595"
                />
                <rect
                  width="2.34077"
                  height="20.2866"
                  transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16 1.65527)"
                  fill="#979595"
                />
              </svg>
            </div>
            <h1>Get qoute</h1>

            <div className="radio_buttons">
              <span className="size">Size of move</span>
              <div className="radio">
                <input
                  type="radio"
                  name="transportation"
                  id="car"
                  value="car"
                />
                <label htmlFor="">Loacl</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="transportation"
                  id="car"
                  value="car"
                />
                <label htmlFor="">Long</label>
              </div>
            </div>
            <div className="input_content">
              <div className="box">
                <span>Moving from</span>
                <input type="text" placeholder="Street Address or Zip Code" />
              </div>
              <div className="box">
                <span>Moving to</span>
                <input type="text" placeholder="Street Address or Zip Code" />
              </div>
              <div className="box">
                <span>E-mail address</span>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="box">
                <span>Date of move</span>
                <input type="text" placeholder="00.00.0000" />
              </div>
              <div className="box">
                <span>Moving from</span>
                <input type="text" placeholder="What’s your name?" />
              </div>
              <div className="box">
                <span>Name</span>
                <input type="text" placeholder="+1 (***) **-**-**" />
              </div>
            </div>

            <a href="/" className="getqoute">
              get qoute
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Location;
