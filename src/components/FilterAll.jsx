import {useState} from 'react'
import '../assets/styles/filter.css'
const FilterAll = ({dropDownName}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(dropDownName);
  
    const options = ['Option 1', 'Option 2', 'Option 3'];
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  return (
    <div className="dropdown">
    <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M15.4613 0H0.538721C0.241239 0 0 0.238108 0 0.531728V3.16543C0 3.45905 0.241239 3.69715 0.538721 3.69715H1.20523L6.12795 9.40775V15.4683C6.12795 15.6644 6.23731 15.8445 6.41244 15.937C6.49212 15.9792 6.5795 16 6.66661 16C6.77112 16 6.87537 15.97 6.96549 15.9107L9.63216 14.156C9.78203 14.0574 9.87205 13.8913 9.87205 13.7136V9.40775L14.7948 3.69715H15.4613C15.7588 3.69715 16 3.45905 16 3.16543V0.531728C16 0.238108 15.7588 0 15.4613 0ZM8.92304 8.86762C8.84013 8.96381 8.79461 9.08589 8.79461 9.21218V13.429L7.20539 14.4747V9.21218C7.20539 9.08589 7.15986 8.96376 7.07696 8.86762L2.61991 3.69715H13.3801L8.92304 8.86762ZM14.9226 2.6337H1.07744V1.06346H14.9226V2.6337Z" fill="#747474"/>
</svg></span>
<span> {selectedOption} </span>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
  <path d="M0 1.38021L4.5268 6L9.05345 1.38021L7.64013 0L4.5268 3.17734L1.41332 0L0 1.38021Z" fill="black"/>
</svg> 
    </button>
    {isOpen && (
      <ul className="dropdown-options">
        {options.map((option, index) => (
          <li
            key={index}
            className="dropdown-option"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default FilterAll