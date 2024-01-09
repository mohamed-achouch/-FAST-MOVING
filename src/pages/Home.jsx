import React from "react";
import "../assets/styles/home.css";
import bgHome from "../assets/images/bg_home.png";
import mobile from "../assets/images/image 1.png";
import TopMovingCompanies from "../components/TopMovingCompanies";
import servises from "../services";
import Service from "../components/Service";
import FindYourMoversInLocations from "../components/FindYourMoversInLocations";
import TopHead from "../components/TopHead";
import Reviews from "../components/Reviews";
import Trick from "../components/Trick";
import FreeMoving from '../components/FreeMoving'
import ratingandservices from "../assets/images/ratingandservices.png";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="serching">
          <p>Find Best Moving Companies in California</p>
          <form className="form" action="">
            <input
              type="text"
              placeholder="What are you looking for"
              className="find_input"
            />
            <select name="" id="">
              <option value="">Select a category</option>
            </select>
            <select name="" id="">
              <option value="">Choose location</option>
            </select>
            <a href="/">Search Moving Companies</a>
          </form>
          <svg
            id="showplus"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M0 1.84028L6.03573 8L12.0713 1.84028L10.1868 0L6.03573 4.23645L1.88442 0L0 1.84028Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="image">
        <div className="overly"></div>
        <img className="bg" src={bgHome} alt="" />
        <img className="mobile" src={mobile} alt="" />
      </div>

      <div className="container">
        <div className="statistics">
          <div className="pre_next">
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
          <div className="box">
            <h1>30</h1>
            <span>locations</span>
          </div>
          <div className="box">
            <h1>56</h1>
            <span>moving companies</span>
          </div>
          <div className="box">
            <h1>274</h1>
            <span>reviews</span>
          </div>
          <div className="box">
            <h1>
              15.6<span>k</span>
            </h1>
            <span>SATISFIED CUSTOMERS</span>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <TopMovingCompanies />
      <div className="content_services">
        <div className="container">
          <TopHead content="Moving Services" seeall={false} />
          <div className="list">
            {servises.map((item) => (
              <Service
                key={item.id}
                title={item.title}
                image={item.image}
                listing={item.listing}
              />
            ))}
          </div>
        </div>
      </div>
      <FindYourMoversInLocations />
      <Reviews />
      <Trick />
      <div className="container">
        <h1 className="moving_companies">
          Moving Companies Ratings and Reviews
        </h1>
        <div className="companies_rating_services">
          <p>
            Many in the United States are looking for the best moving companies
            because most people realize the value of professional service. A
            fully licensed and insured moving company is better at logistics
            management. The best movers can pack, load, transport, and unload
            safely and on time. The service can also be cheaper than
            self-moving. They offer both local and interstate moves. The best
            movers in San Francisco, San Diego, and elsewhere in California also
            offer storage facilities.
            <br /> <br /> Here, we analyze some of the best interstate moving
            companies and local movers and packers and publish movers rating and
            reviews so you can identify the most reputed businesses easily.
            <br /> <br /> Americans move a lot. Statistics reveal that Americans
            move 11.7 times on an average in their lifetime. They move for
            various reasons – a job change, upsizing to a new home, or just to
            live in a new neighborhood. It has also been noticed that younger
            people move more frequently. According to the Annual Social and
            Economic Supplement of the Current Population Survey for 2013, most
            moves are related to housing (48%), followed by family issues
            (30.3%), and job relocations (19.4%).
            <br /> <br /> The US Census Bureau data reveals that 7.4 million
            Americans moved in 2019. It is common in the state of California as
            well. 501,000 people moved into the state in 2019, but many of them
            were foreign nationals. On the other hand, 691,000 local residents
            relocated to other states, with most of them going to Texas,
            Arizona, Washington state, Nevada, and Oregon. Most recently, Elon
            Musk too decided to move out from the Golden State to Texas.
          </p>
          <div className="img_rating">
            <img src={ratingandservices} alt="" />
          </div>
        </div>
      <div className="mobile_div">
      <h1 className="what_is_mouving_service">What is a Moving Service?</h1>
        <p className="parag">
          A moving service is a business that helps homeowners and commercial
          establishments relocate to a new place. Many companies will offer only
          local moves within the same city. But others offer long distance
          <br /> moves as well to another state or even another country. Some of
          them are all-inclusive or full-service businesses, which means that
          will do the packing, loading, transit, unloading, and even storing.
          <br />
          <br />
          The best moving companies in California will be:
        </p>
        <br />
        <ul className="list_mouving">
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
            Full-service movers
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
            Will have vehicles of all sizes
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
            Will carry out background check for all employees
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
            Offer both local and long distance moves
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
            Will offer storage facilities
          </li>
        </ul>

      </div>
        <div className="dropDown">
          <span>More Info</span>
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
     <FreeMoving/>
    </section>
  );
};

export default Home;
