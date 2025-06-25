import PropTypes from "prop-types";

const Weather = (props) => {
  const { temperature } = props;

  return (
    <div>
      {temperature > 25 ? (
        <h3>Its a sunny day</h3>
      ) : temperature < 10 ? (
        <h3>Its a cold day</h3>
      ) : (
        <h3>Its moderate day</h3>
      )}
    </div>
  );
};
Weather.PropTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
