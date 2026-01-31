import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <input
        className="search-input"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-btn">→</button>
    </form>
  );
};

export default SearchBar;
