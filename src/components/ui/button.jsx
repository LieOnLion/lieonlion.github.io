import { A } from "@solidjs/router";
import { gcn } from "../util";

const styles = {
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

const Button = ({ link = "/", variant, size, uppercase, children }) => {
  return (
    <A href={link} className={gcn(styles, {variant, size, uppercase})}>
      {children}
    </A>
  )
}

export default Button;