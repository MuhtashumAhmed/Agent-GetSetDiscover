

const ReviewCard = ({ data, key }) => {
    return (
        <div key={key} className='h-[280px] max-w-[303.45px] w-full shadow-[0px_0.94px_23.58px_0px_#0000000D] rounded-[27px] py-[17.92px] px-[34.89px] ' >
            {/* header */}
            <div className="flex justify-between gap-2 " >
                <div className=" flex gap-2" >
                    <img src={data?.image} className="h-[49.036197662353516px] w-[49.036197662353516px] rounded-full " />
                    <div>
                        <h3 className="font-manrope text-[15.09px] text-myBlack " >{data.name}</h3>
                        <span className="font-manrope text-myBlack text-[11.32px] underline " >{data.from}</span>
                    </div>
                </div>
                <div>
                    {data.reviewStar}
                    <span className="text-[#9B9B9B] font-manrope text-[7.75px]  " >{data?.date}</span>
                </div>
            </div>
            {/* mesage */}
            <p className="mt-[10px] text-myBlack text-[13.2px] font-manrope " >{data?.message}</p>
        </div>
    )
}

export default ReviewCard