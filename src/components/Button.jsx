const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center text-lg font-montserrat border leading-none gap-2 px-7 py-4

      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red hover:bg-orange-600"} rounded-full ${ fullWidth && 'w-full'}`}
    >

      {label}  {/*  functional reusable component */}
      {iconUrl &&
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      }
    </button>
  )
}

export default Button