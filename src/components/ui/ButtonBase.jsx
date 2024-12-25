const ButtonBase = ({ text, className }) => {
  return (
    <a className={`flex justify-center px-6 py-3 rounded-xl border-2 cursor-pointer text-slate-100 font-bold uppercase ${className}`}>
      {text}
    </a>
  )
}

export default ButtonBase;