import Weather from "@/app/components/Weather"

const getWeather=()=>{
return(
    <>
    <h3>
        this is ques3
    </h3>
    <Weather temperature={40} />
    <Weather temperature={7} />
    </>
)
}
export default getWeather