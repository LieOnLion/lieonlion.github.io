import ButtonBase from "./ButtonBase";

const ButtonPrimary = ({ link ="/", className, children }) => {
  return (
    <ButtonBase link={link} className={`bg-aurora-500 border-aurora-400 shadow-[inset_0_0_0_2px] shadow-aurora-700 ${className}`}>
      {children}
    </ButtonBase>
  )
}

export default ButtonPrimary;