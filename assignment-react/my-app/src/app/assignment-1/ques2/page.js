import UserCard from "@/app/components/UserCard";
const showUserCard=()=>{
    return(
        <>
        <h3>this is ques2</h3>
        <UserCard name={"sahib"} email={"sahib@gmail.com"} avatar={"/images/man.png"} />
        <UserCard name={"sidak"} email={"sid@gmail.com"} avatar={"/images/sid.png"} /> 
        </>
    )
}
export default showUserCard;