import { Dynamic } from "solid-js/web";
import { A } from "@solidjs/router";
import { gcn } from "../util";

const options = {
  base: "inline-flex justify-center cursor-pointer font-bold text-slate-100",
  variants: {
    variant: {
      primary: "bg-aurora-500 border-aurora-400 shadow-[inset_0_0_0_2px] shadow-aurora-700",
      // secondary: "",
      outline: "bg-aurora-500/25 border-aurora-500"
    },
    size: {
      // sm: "",
      md: "px-6 py-3 rounded-xl border-2",
      // lg: ""
    },
    uppercase: {
      true: "uppercase",
      false: " "
    }
  },
  default: {
    variant: "primary",
    size: "md",
    uppercase: true
  }
}

const Button = ({ styles = {}, children, ...props }) => {
  const component = props.href ? A : "button"

  return (
    <>
      <Dynamic component={component} className={gcn(options, styles)} {...props}>
        {children}
      </Dynamic>
    </>
  )
}

export default Button;