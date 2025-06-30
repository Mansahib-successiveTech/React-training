"use client"
import DumbBasicModal from "./DumbModal";
import ReusableButton from "./ReusableButton";

const DumbParent = () => {
  const text = "reusable component ";
  const backGroundStyle = "aqua";
  const heading="Dumb modal"
  const onClickhandler = () => {
    alert("hi");
  };

  return (<>
    <ReusableButton
      text={text}
      backGroundStyle={backGroundStyle}
      onClickhandler={onClickhandler}
    />
    <DumbBasicModal  backGroundStyle={backGroundStyle} text={text} heading={heading} />
    </>
  );
};
export default DumbParent;
