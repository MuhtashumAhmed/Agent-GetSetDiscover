

const VoucherCard = ({ key, icon, text, value, bgColor }) => {
    return (
        <div key={key} className='flex-1 h-[90px]  min-w-[271px] rounded-[12.75px] bg-myWhite-color border border-[#0000001A] p-[21px] pt-4 ' >
            <div className='flex items-center gap-[15px]  ' >
                {/* icon */}
                <span className={`flex items-center justify-center h-[31.5px] w-[31.5px] rounded-[8.75px] ${bgColor}`} >{icon}</span>
                {/* content */}
                <div>
                    <span className="font-noto text-[12.3px] text-[#717182] " >{text}</span>
                    <h2 className="font-noto font-bold text-[21px] text-[#0A0A0A] " >{value}</h2>
                </div>

            </div>

        </div>
    )
}

export default VoucherCard