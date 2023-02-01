import React from "react";
import "./Searchbar.scss";
const SearchBar = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <input type="text" placeholder="Front-end dev, English and even art!" />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
