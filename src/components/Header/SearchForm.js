import React, { useState } from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from "../../context/mealContext";
import { useNavigate } from "react-router-dom";
import { startFetchMealsBySearch } from "../../actions/mealsActions";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch } = useMealContext();

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.replace(/[^\w\s]/gi, "").length === 0) {
      setErrorMsg("Invalid search term ...");
    } else {
      setErrorMsg("");
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate("/");
      startFetchMealsBySearch(dispatch, searchTerm);
    } else {
      setErrorMsg("Please enter a valid search term.");
    }
  };

  return (
    <form
      className="search-form flex align-center"
      onSubmit={handleSearchResult}
    >
      <input
        type="text"
        className="form-control-input text-dark-gray fs-15"
        placeholder="Search recipes here ..."
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <button
        type="submit"
        className="form-submit-btn text-white text-uppercase fs-14"
      >
        <BsSearch className="btn-icon" size={20} />
      </button>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
    </form>
  );
};

export default SearchForm;
