
import { useState } from 'react';
import '../assets/styles/dropdown.css'
const DropDown = ({dropDownName}) => {
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
     <span> {selectedOption} </span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
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

export default DropDown