"use client"
const ReusableButton=(props)=>{
    const {onClickhandler,backGroundStyle,text}=props;

return (
    <>
    <button onClick={onClickhandler} style={{background:backGroundStyle}}>
        {text}
    </button>
    </>
)
}
export default ReusableButton