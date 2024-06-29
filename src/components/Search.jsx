import React, { useState, useEffect } from "react";

function Search(props) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);
  return (
    <div className="text-center d-flex justify-content-center my-2">
      <input
        type="search"
        name="search"
        id=""
        placeholder="Search Country"
        className="form-control w-25"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
