import React from 'react';
import { FiDownload, FiMail, FiShare2, FiCheckCircle } from 'react-icons/fi';
import { FaGift } from 'react-icons/fa';
import { EnergyIcon, SuccessTickIcon, TickIcon, GiftIcon } from '../../assets/icons/Icons';

export default function PaymentSuccess() {
    return (
        <div className="mt-4  flex items-center justify-center ">
            <div className="w-full  bg-white rounded-2xl   text-gray-800">

                {/* --- Header --- */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center mb-4 h-[69.9800033569336px] w-[69.9800033569336px] rounded-full bg-[#E4FFF1] text-green-500">
                        <SuccessTickIcon />
                    </div>
                    <h1 className="text-sm md:text-[17.5px] font-bold text-[#00A63E] ">Payment Successful!</h1>
                    <p className="text-[#717182] mt-2 text-sm font-manrope text-center">
                        Your credits have been added to your account and are ready to use
                    </p>
                </div>

                {/* --- Purchase Details Card --- */}
                {/* <div className="w-[587.98px] flex flex-wrap gap-4 mt-8 bg-[#EFF6FF] border border-[#B9F8CF] rounded-xl p-4 space-y-3 text-sm"> */}
                <div className="w-full max-w-[587.98px] grid grid-cols-1  sm:grid-cols-2 gap-4 mt-8 bg-[#EFF6FF] border border-[#B9F8CF] rounded-xl p-4 space-y-3 text-sm">
                    <div className='flex-1 gap-[7.3px] text-[#0A0A0A] ' >
                        <h2 className='mb-1.5 text-[#0D542B] ' >Purchase Details</h2>
                        <div className="flex justify-between">
                            <span className="font-manrope text-[12.3px] text-[#0A0A0A] ">Credits Purchased</span>
                            <span className="font-semibold font-manrope text-[#0A0A0A] text-[12.3px] ">100</span>
                        </div>
                        <div className="flex justify-between mt-[6.3px] ">
                            <span className="font-manrope text-[12.3px] text-[#0A0A0A] ">Amount Paid</span>
                            <span className="font-semibold font-manrope text-[#0A0A0A] text-[12.3px] ">$10.00</span>
                        </div>
                        <div className="flex justify-between mt-[6.3px]">
                            <span className="font-manrope text-[12.3px] text-[#0A0A0A] ">Purchase Type</span>
                            <span className=" text-[#008236] text-[10.5px] font-semibold bg-[#DCFCE7] px-[8.11px] py-[2.51px] rounded-[6.75px] ">Custom</span>
                        </div>
                        <div className="flex justify-between mt-[6.3px]">
                            <span className="font-manrope text-[12.3px] text-[#0A0A0A] ">Price per Credit</span>
                            <span className="font-semibold text-[12.3px] ">$0.100</span>
                        </div>

                    </div>
                    <div className='flex-1 gap-[6.3px] ' >
                        <h2 className='mb-1.5 text-[#0D542B] ' >Transaction Info</h2>
                        <div className="flex justify-between mt-[6.3px]">
                            <span className="font-manrope text-[12.3px] text-[#0A0A0A] ">Transaction ID</span>
                            <span className="text-[10.5px] text-[#0A0A0A] ">TXN-78929677</span>
                        </div>
                        <div className="flex justify-between mt-[6.3px]">
                            <span className="font-manrope text-[12.3px] text-[#0A0A0A] ">Date & Time</span>
                            <span className="font-semibold text-[12.3px] font-manrope  ">July 26, 2025 at 02:28 AM</span>
                        </div>
                        <div className="flex justify-between mt-[6.3px]">
                            <span className="font-manrope text-[12.3px] text-[#0A0A0A] ">Status</span>
                            <span className="font-semibold bg-[#00A63E] w-max rounded-[6.75px] px-[8.11px] py-[2.51px] text-[#FFFFFF] font-manrope  text-[10.5px] ">Completed</span>
                        </div>
                    </div>
                </div>

                {/* --- Action Buttons --- */}
                <div className=" mt-6 flex flex-wrap gap-3 text-sm justify-center md:justify-normal  w-full  ">
                    <div className='p-2 h-[124.65px] w-[186.66px] flex flex-col items-center justify-center border border-[#0000001A] rounded-[12.75px] ' >
                        <span className="flex flex-col items-center justify-center gap-2  rounded-lg ">
                            <FiDownload className='text-[#155DFC] h-[27.98px] w-[27.98px] ' /> Download Receipt
                        </span>
                        <p className='text-[#717182] text-[10.5px] text-center mt-1.5 ' >PDF receipt for your records</p>

                    </div>
                    <div className='p-2 h-[124.65px] w-[186.66px] flex flex-col items-center justify-center border border-[#0000001A] rounded-[12.75px] ' >

                        <span className="flex flex-col items-center justify-center gap-2  rounded-lg ">
                            <FiMail className='text-[#00A63E] h-[27.98px] w-[27.98px]  ' /> Email Receipt
                        </span>
                        <p className='text-[#717182] text-[10.5px] text-center mt-1.5 ' >PDF receipt for your records</p>
                    </div>
                    <div className='p-2 h-[124.65px] w-[186.66px] flex flex-col items-center justify-center border border-[#0000001A] rounded-[12.75px] ' >
                        <span className="flex flex-col items-center justify-center gap-2  rounded-lg ">
                            <FiShare2 className='h-[27.98px] w-[27.98px] text-[#9810FA]' /> Share Success
                        </span>
                        <p className='text-[#717182] text-[10.5px] text-center mt-1.5 ' >PDF receipt for your records</p>
                    </div>
                </div>

                {/* --- What's Next --- */}
                <div className="mt-8 border border-[#0000001A] p-3 rounded-[6.73px]  ">
                    <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 bg-[#EFF6FF] p-1 rounded-md ">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold  "><EnergyIcon className="text-[#155DFC]" /></span>
                            <div>
                                <p className="font-medium">Start Using Your Credits</p>
                                <p className="text-sm text-gray-500">Your 100 credits are now available for bookings.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold"><GiftIcon /> </span>
                            <div>
                                <p className="font-medium">Refer Friends & Earn More</p>
                                <p className="text-sm text-gray-500">Share your referral link and earn bonus credits when friends join.</p>
                            </div>
                        </li>
                    </ul>
                </div>



            </div>
        </div>
    );
}