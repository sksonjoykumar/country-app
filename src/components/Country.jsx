import { useEffect, useState } from "react";
import MyCountries from "./MyCountries";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";

function Country() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filterCountries.filter(
      (myCountry) => myCountry.name.common !== name
    );
    setFilterCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountries);
  };

  return (
    <div className="">
      <h1 className="text-center">Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>error.message</h2>}
      {countries && (
        <MyCountries
          countries={filterCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
}

export default Country;
