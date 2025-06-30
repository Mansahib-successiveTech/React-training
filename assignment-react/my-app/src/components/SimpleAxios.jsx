import axios from "axios"
import { ClientAxios } from "./ClientAxios";

const getData=async ()=>{
    try{
const result=await axios.get("https://dogapi.dog/api/v2/facts?limit=5")
return result.data.data;
    }
    catch(err){
        console.log("error");
    }
}

const SimpleAxios=async()=>{
const result=await getData();
console.log(result);

return(
    <>
    <p>using axios</p>
    {result?(
        result.map((items,index)=>
        <li key={index}>
        {items.attributes.body}
        </li>
        )
    ):"no data from server"}
    <ClientAxios result={result} />
    </>

    
)
}
export default SimpleAxios