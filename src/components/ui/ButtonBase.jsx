import { A } from "@solidjs/router";

const ButtonBase = ({ link = "/", className, children }) => {
  return (
    <A href={link} className={`flex justify-center px-6 py-3 rounded-xl border-2 cursor-pointer font-bold uppercase text-slate-100 ${className}`}>
      {children}
    </A>
  )
}

export default ButtonBase;