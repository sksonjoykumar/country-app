/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import RecCountry from "./RecCountry";

function MyCountries(props) {
  return (
    <section className="my-container">
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          <RecCountry
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
}

export default MyCountries;
