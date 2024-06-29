/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const RecCountry = (props) => {
  const { country } = props;
  const { name, flags, capital, population, area } = country;
  const handleRemove = (name) => {
    props.onRemoveCountry(name);
    // console.log(name);
  };

  return (
    <article className="img-container">
      <img src={flags.png} alt={name.common} className="img-size" />
      <h3>Name: {name.common}</h3>
      <h3>Population: {population}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Area: {area}</h3>
      <button
        type="button"
        className="btn btn-primary my-4"
        onClick={() => {
          handleRemove(name.common);
        }}
      >
        Remove
      </button>
    </article>
  );
};

export default RecCountry;
