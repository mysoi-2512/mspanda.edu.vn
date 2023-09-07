const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth, link }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full    
      ${backgroundColor ? backgroundColor : "bg-main-brown"} 
      ${textColor ? textColor : "text-white"}
      ${borderColor ? borderColor : "border-main-brown"}
      ${fullWidth && "w-full"} `}
    >
        {label}
        {iconURL && <img 
         src={iconURL}
         alt="arrow right icon"
         className="ml-2 rounded-full w-5 h-5"
         onClick={() => window.open(link)}
        />}
    </button>
  )
}

export default Button