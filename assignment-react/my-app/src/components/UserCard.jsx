import Image from "next/image";
import PropTypes from "prop-types";

const UserCard=(props)=>{
const {name,email,avatar}=props;
return(
    <div style={{ background:"white",
                  color:"black",
                  display: "block",
                
                width:"20%"

    }}>
    <h2>name:{name}</h2>
    <h3>email:{email}</h3>
    <img src={avatar} width={100} height={100} ></img>
    </div>
) 
}
UserCard.prototype={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired
}
export default UserCard;