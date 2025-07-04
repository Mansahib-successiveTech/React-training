import Image from "next/image";
import PropTypes from "prop-types";

const UserCard = (props) => {
  const { name, email, avatar } = props;
  return (
    <div
      style={{
        background: "white",
        color: "black",
        display: "block",

        width: "20%",
      }}
    >
      <h2>name:{name}</h2>
      <h3>email:{email}</h3>
      <img src={avatar} width={100} height={100} alt="image"></img>
    </div>
  );
};
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img:PropTypes.string.isRequired
};
export default UserCard;
