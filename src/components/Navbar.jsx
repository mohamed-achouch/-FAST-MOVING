import { useState } from "react";
import "../assets/styles/navbar.css";
import {  NavLink } from "react-router-dom";
import {MdCancel} from 'react-icons/md'
const Navbar = () => {
  const [hide, setHide] = useState(true);



  const handleClick =() => {
    setHide(!hide)
  }
  return (
    <div className="header" id="go">
      <div className="top_header" id="go">
        <div className="container">
          <p>Best California Moving Companies</p>
          <div>
            <span>Any questions?</span>
            <a href="/">Contact us</a>
          </div>
        </div>
      </div>
      <div className="bottom_header">
        <div className="container">
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
          <div className="list_menu">
           {
            <ul className={`nav ${hide === true ? 'close' : 'nav'}`}>
            <li >
              <NavLink onClick={handleClick}  to="home" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="location">Location</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="service" >Services</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="tricks" >Tips & Tricks</NavLink>
            </li>
            <li className="plus_link">
              <NavLink to="company" onClick={handleClick} >
                <span className="plus">+</span>Add a Company
              </NavLink>
            </li>
            <li>
              <NavLink to="qoute" onClick={handleClick} >Get quote</NavLink>
            </li>
            <li></li>
          </ul>
           } 
          </div>

         {
        
          <div className="botton_search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M3.12443 0.837365C1.6802 1.67112 0.647023 3.01759 0.215437 4.6284C-0.216241 6.23922 0.0053791 7.92181 0.839137 9.36604C1.95121 11.2921 4.02479 12.4886 6.25089 12.4886C6.95376 12.4886 7.65118 12.3676 8.31234 12.1355L11.1209 17L13.1234 15.8438L10.3153 10.9801C11.2639 10.1685 11.9468 9.09216 12.2769 7.86021C12.7085 6.24939 12.4869 4.56689 11.6531 3.12257C10.5411 1.19653 8.46746 0 6.24145 0C5.15111 0 4.07326 0.289512 3.12443 0.837365ZM9.65057 4.27877C10.1756 5.18809 10.3151 6.24754 10.0433 7.26176C9.77155 8.27597 9.12103 9.1237 8.21171 9.64871C7.614 9.99381 6.93591 10.1762 6.25089 10.1762C4.84837 10.1762 3.54205 9.42274 2.84177 8.20984C2.31676 7.30051 2.17727 6.24116 2.44912 5.22685C2.72087 4.21263 3.3714 3.36491 4.28072 2.83981C4.87834 2.4948 5.55643 2.3124 6.24145 2.3124C7.64406 2.3124 8.95028 3.06587 9.65057 4.27877Z"
                  fill="#06965C"
                />
              </svg>
             {
              hide === true ?  <svg
              id="menu_btn"
              onClick={() => setHide(!hide)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <rect width="16" height="3" fill="#06965C" />
              <rect y="6" width="16" height="3" fill="#06965C" />
              <rect y="12" width="8" height="3" fill="#06965C" />
            </svg> : <MdCancel id="c_btn" onClick={() => setHide(!hide)}/>
             }
            </div> 
         }
            
       
            <svg
              id="search"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
            >
              <path
                d="M2.75685 0.738852C1.48253 1.47452 0.570903 2.66258 0.190092 4.08388C-0.190801 5.50519 0.00474627 6.98983 0.740415 8.26415C1.72166 9.9636 3.55128 11.0194 5.51549 11.0194C6.13567 11.0194 6.75104 10.9126 7.33442 10.7078L9.81255 15L11.5795 13.9798L9.10177 9.68832C9.93872 8.97223 10.5413 8.02249 10.8326 6.93548C11.2134 5.51417 11.0178 4.02961 10.2822 2.75521C9.30099 1.05576 7.47128 0 5.50716 0C4.5451 0 3.59405 0.255452 2.75685 0.738852ZM8.51521 3.77538C8.97845 4.57773 9.10152 5.51254 8.86174 6.40743C8.62196 7.30233 8.04797 8.05032 7.24562 8.51356C6.71823 8.81807 6.11992 8.97901 5.51549 8.97901C4.27797 8.97901 3.12534 8.31418 2.50744 7.24398C2.0442 6.44163 1.92112 5.5069 2.16099 4.61193C2.40077 3.71703 2.97476 2.96904 3.77711 2.50571C4.30442 2.20129 4.90273 2.04035 5.50716 2.04035C6.74476 2.04035 7.89731 2.70518 8.51521 3.77538Z"
                fill="#06965C"
              />
            </svg>
         
        </div>
      </div>
    </div>
  );
};
export default Navbar;
