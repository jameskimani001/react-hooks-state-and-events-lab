import React from 'react';

function Filter({ currentCategory, onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={currentCategory}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Dairy">Dairy</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
}

export default Filter;
