

const SimpleButton = ({title, icon,  className="" , onClick={} }) => {
  return (
    <button className={`flex items-center justify-center min-w-[137px] h-[31px] border-[1px] cursor-pointer border-[#0000001A] rounded-[6.75px] font-manrope text-[12.3px] font-semibold  ${className}`} onClick={onClick}  >
        <span className="mr-1"  >{icon}</span>
        <span className='text-[10px] sm:text-xs ' >{title}</span>
    </button>
  )
}

export default SimpleButton