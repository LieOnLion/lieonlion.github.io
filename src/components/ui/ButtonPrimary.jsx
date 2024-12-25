import ButtonBase from "./ButtonBase";

const ButtonPrimary = ({ text }) => {
  return (
    <ButtonBase text={text} className="bg-aurora-500 border-aurora-400 shadow-[inset_0_0_0_2px] shadow-aurora-700" />
  )
}

export default ButtonPrimary;