import React from "react";

const FreeMoving = () => {
  return (
    <div className="free_Moving">
     <div className="container">
     <h1>100% Free Moving Quotes</h1>
      <span>Compare Top Movers and Save Money!</span>
<div className="serching">
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
</div>
     </div>
    </div>
  );
};

export default FreeMoving;
