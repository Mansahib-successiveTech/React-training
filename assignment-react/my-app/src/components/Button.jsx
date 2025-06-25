import PropTypes from "prop-types";
const Button = (props) => {
  const { text, colorBtn } = props;

  return (
    <div>
      <button
        style={{
          color: colorBtn,
        }}
      >
        {text}
      </button>
    </div>
  );
};
Button.PropTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Button;
