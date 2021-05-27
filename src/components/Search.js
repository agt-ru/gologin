import React, { useState } from "react";
import "../styles/Search.css";
import search from '../img/search.png';

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = e => {}

  return (
    <form onSubmit={submitHandler} className="search-form">
      <img src={search} alt="search icon" className="search-form__icon"/>
      <input
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search in profiles..."
        className="search-form__input"
        value={keyword}
      ></input>
    </form>
  )
}

export default Search
