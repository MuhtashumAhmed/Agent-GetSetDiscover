import { CircleIcon, CrossIcon, FavouriteIcon, GroupOfPeopleIcon, RatingStarIcon, SmallLocationIcon, SuitcaseIcon } from "../../../assets/icons/Icons";
import { CardSkeleton } from "./CardSkeleton";


const TransferCard = ({ key, showResults, data, crossIcon = true, selectButton = true, setIsHotelDetailModal, setSelectedTransfers, onDelete, className = "" }) => {
    if (!showResults) {
        return <CardSkeleton />;
    }

    // -- for open modal ---
    // const handleCardClick = () => {
    //     if (setIsHotelDetailModal) setIsHotelDetailModal(true);
    // };

    return (
        // <div key={key} className=' flex flex-1 gap-3 pl-3 items-center mt-[10px]  w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F] ' onClick={handleCardClick} >
        <div key={key} className={` flex flex-1  pl-3 items-center mt-[10px]   w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F] ${className} `}  >
            {/* image */}
            <figure className='mr-2 h-[100px] max-w-[150px] border border-[#EFEFEF] rounded-[8px]  ' >
                <img src={data?.image} className=' rounded-lg w-full h-full object-contain ' />
            </figure>
            <div className=' font-Poppins flex flex-col gap-1  ' >
                <h6 className='font-medium text-sm text-[#1D1D1D] ' >{data?.name}</h6>
                <div className="flex gap-2 text-nowrap " >
                    <p className='flex items-center gap-1 text-[11px] sm:text-xs text-[#032749]  ' ><GroupOfPeopleIcon />{data?.passengers} </p>
                    <p className='flex items-center gap-1 text-[11px] sm:text-xs text-[#032749]  ' ><SuitcaseIcon />{data?.suitcases} </p>
                </div>
                <p className='flex items-center gap-1 text-[11px] sm:text-xs text-[#032749]  ' ><CircleIcon />{data?.type} </p>

                <h3 className='flex items-center text-base text-[#FF6726] underline ' >${data?.price}  </h3>
            </div>
            {/* fav and cross icon */}
            <div className=' flex-1 flex flex-col  justify-between items-end h-full pr-2 py-4  ' >
                <div>
                    {
                        crossIcon ? <button className="flex" onClick={onDelete} > <CrossIcon /> </button> : (<span className='flex items-center gap-1 text-xs text-[#1D1D1D] ' > <RatingStarIcon /> {data?.rating}</span>)
                    }
                </div>
                {
                    selectButton && (

                        <button className="w-[92px] h-[30px] border border-[#032749] text-[#032749] font-poppins text-[13px] font-bold rounded-[24px] hover:bg-[#032749] hover:text-myWhite-color transition-all ease-in cursor-pointer " onClick={() =>
                            setSelectedTransfers((prev) => [...prev, data]) // push into array
                        } >Select</button>
                    )
                }
            </div>
        </div>
    )
}

export default TransferCard