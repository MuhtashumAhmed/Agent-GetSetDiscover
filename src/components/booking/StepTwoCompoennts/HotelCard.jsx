import { CrossIcon, FavouriteIcon, RatingStarIcon, SmallLocationIcon } from "../../../assets/icons/Icons"
import { CardSkeleton } from "./CardSkeleton";


const HotelCard = ({ key, data, crossIcon = true, className = "", favIcon = true, setIsHotelDetailModal, showResults, setDetailCardData, setDetailTourCardData, onDelete }) => {
    if (!showResults) {
        return <CardSkeleton />;
    }
    const handleCardClick = () => {
        // setDetailCardData(data); // This sets the data when card is clicked
        // setIsHotelDetailModal(true);
        // setDetailTourCardData(data)
        if (setDetailCardData) setDetailCardData(data); // Hotel case
        if (setDetailTourCardData) setDetailTourCardData(data); // Tour case
        if (setIsHotelDetailModal) setIsHotelDetailModal(true);
    };
    return (
        <div key={key} className={` flex flex-1 gap-3 pl-3 items-center mt-[10px]  w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F] ${className} `} onClick={handleCardClick} >
            {/* image */}
            <figure className=' h-[100px] w-[100px]  ' >
                <img src={data?.image} className=' rounded-lg h-full object-cover ' />
            </figure>
            <div className='font-Poppins flex flex-col gap-1  ' >
                <h6 className='font-medium text-sm text-[#1D1D1D] ' >{data?.name}</h6>
                <p className='flex items-center gap-1 text-xs text-[#032749]  ' ><SmallLocationIcon />{data?.location} </p>
                <span className='flex items-center gap-1 text-xs text-[#1D1D1D] ' > <RatingStarIcon /> {data?.rating}</span>
                <h3 className='flex items-center text-base text-[#FF6726] ' >${data?.price} <span className='text-[#838383] text-sm ' >/person</span> </h3>
            </div>
            {/* fav and cross icon */}
            <div className='flex-1 flex gap-x-2 justify-end h-full p-4 ' >
                {
                    favIcon && <FavouriteIcon />
                }

                {
                    crossIcon && <button className="flex " onClick={onDelete} >
                        <CrossIcon />

                    </button>
                }
            </div>

        </div>
    )
}

export default HotelCard