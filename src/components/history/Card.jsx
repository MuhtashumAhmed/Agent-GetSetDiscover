import React, { useEffect, useRef, useState } from 'react'
import { CalendarIcon, ThreeDotsIcon } from '../../assets/icons/Icons'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

const Card = ({ data, key, setActiveTab, onCancel, onMoveToVoucher, className = "" }) => {

    const [threeDotsMenuOpen, setThreeDotsMenuOpen] = useState(false);
    const threeDotsRef = useRef(null);
    const navigate = useNavigate();
    /* -------------- skeleton -------------- */
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (threeDotsRef.current && !threeDotsRef.current.contains(event.target)) {
                setThreeDotsMenuOpen(false);
            }
        };
        if (threeDotsMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [threeDotsMenuOpen]);

    return (
        < >
            <div
                key={key}
                className={`relative flex items-center gap-[11.12px] min-w-[300px]  sm:min-w-[358.5px] h-[114.86px] rounded-[11.12px] bg-[#FFFFFF] p-[11.12px] border border-[#F5F5F5] shadow font-Poppins flex-1 ${className}`}
            >
                {/* image + skeleton */}
                <figure className='relative  '>
                    {/* shimmer skeleton – same size as image */}
                    {!imgLoaded && (
                        <div className=' shimmer h-[92.63px] w-[92.63px] rounded-[7.14px]' />
                    )}
                    <img
                        src={data?.image}
                        alt="room"
                        className={`h-[92.63px] w-[92.63px] rounded-[7.14px] object-cover ${imgLoaded ? 'block' : 'hidden'}`}
                        onLoad={() => setImgLoaded(true)}
                    />
                </figure>
                {/* data */}
                <div className='space-y-1 ' >
                    {/* id */}
                    <h3 className='text-[#1D1D1D]  text-[12.97px]  ' >{data?.id}</h3>
                    <div className='flex  text-[#032749] text-[11.12px] ' >
                        <span>{data?.guestName}<span className='mx-1' >|</span>  </span>
                        <span> {data?.phone}</span>
                    </div>
                    {/* Date*/}
                    <div className='flex items-center' >
                        <span><CalendarIcon /></span>
                        <span className='text-[11.12px] text-[#111827]/60 ml-0.5 ' >{data.checkIn} - {data.checkOut}</span>
                    </div>
                    {/* price */}
                    <h2 className='text-[#FF6726] text-[14.82px] font-medium ' >RS.{data?.amount}</h2>
                </div>
                {/* ========= 3rd Column having buttons or badges ======== (dynamic rendering) */}
                <div className='' >
                    {/* --- Reserve three dots 3dots ---- */}
                    {data.status === "reserved" && (
                        <span className='absolute top-2 right-3 cursor-pointer' ref={threeDotsRef} onClick={() => setThreeDotsMenuOpen((prev) => !prev)} ><ThreeDotsIcon /></span>
                    )}
                    {/* -- voucher badge --- */}
                    {data.status === "voucher" && (
                        <span className='absolute top-2 right-3 bg-[#474747] w-[64.84px] h-[21.30px] rounded-[22.23px] font-Poppins text-[9.26px] text-myWhite-color font-semibold flex items-center justify-center '>{data?.voucherCode}</span>
                    )}

                    {/* --- cancel badge ------ */}
                    {data.status === "cancelled" && (
                        <span className='absolute top-2 right-3 bg-[#FF0000] w-[64.84px] h-[21.30px] rounded-[22.23px] font-Poppins text-[9.26px] text-myWhite-color font-semibold flex items-center justify-center '>Cancel</span>
                    )}


                    {/* ==== Voucher 3dots Dropdown menu ====== */}
                    {threeDotsMenuOpen && (
                        <div
                            ref={threeDotsRef} //  ref on container
                            className="absolute top-4.5 right-2.5 mt-2 w-max flex flex-col bg-white shadow-lg rounded-[5px]  p-2.5  z-10"
                        >
                        {/* text-[#B71717] */}
                            <button
                                className="mb-2 w-full text-left h-[25px] py-[3px] px-2 font-medium text-[10px] font-poppins rounded-[4px] hover:bg-gray-200 transition-all ease-in   text-[#032749] "
                                onClick={() => {
                                    onCancel(data.id);   //  update status in parent
                                    setThreeDotsMenuOpen(false);
                                }}
                            >
                                Cancel
                            </button>

                            <button
                                className="w-max px-2 font-medium py-[3px] h-[25px] text-[10px] font-poppins rounded-[4px]  text-[#032749] hover:bg-gray-200 transition-all ease-in  "
                                onClick={() => {
                                    onMoveToVoucher(data.id); //  update status in parent
                                    // setActiveTab("Vouchers");
                                    setThreeDotsMenuOpen(false);
                                }}
                            >
                                Move to Voucher
                            </button>

                        </div>

                    )}
                    <div className=' absolute bottom-2 right-3 ' >
                        {/* buttons or badges */}
                        {/* {data.status === "reserved" && (

                            <button className="h-[27.79px] w-[103.75px] border border-[#032749] rounded-[22.23px]  font-semibold text-[9.26px] text-[#032749] ">
                                View Summary
                            </button>
                        )} */}
                        {data.status === "reserved" && (
                            <button
                                className="h-[27.79px] w-[103.75px] border border-[#032749] hover:bg-[#032749] hover:text-myWhite-color transition-all ease-linear duration-300 cursor-pointer rounded-[22.23px] font-semibold text-[9.26px] text-[#032749]"
                                // onClick={() => navigate("/dashboard/booking", { state: { step: 3 } })}
                            >
                                View Summary
                            </button>
                        )}

                        {data.status === "voucher" && (
                            <button className="h-[27.79px] w-[103.75px] border border-[#032749] rounded-[22.23px]  font-semibold text-[9.26px] text-[#032749] ">
                                View Voucher
                            </button>

                        )}

                    </div>
                </div>

            </div>




        </>
    )
}

export default Card