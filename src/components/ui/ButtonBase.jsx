const ButtonBase = ({ text, className }) => {
  return (
    <a className={`flex justify-center px-6 py-3 rounded-xl border-2 cursor-pointer font-bold uppercase text-slate-100 ${className}`}>
      {text}
    </a>
  )
}

export default ButtonBase;