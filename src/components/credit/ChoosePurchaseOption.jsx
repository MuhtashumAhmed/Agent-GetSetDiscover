import React from 'react'
import { BackArrow, ButtonBackIcon, ConfigureCalculatorIcon, CreditBundleIcon, StarIcon, TickIcon } from '../../assets/icons/Icons'
import SimpleButton from '../SimpleButton';
import CreditBundles from './CreditBundles';

const ChoosePurchaseOption = ({ steps, activeAction, setActiveAction }) => {

    // helper to get index of current step
    const currentIndex = steps.findIndex((s) => s.title === activeAction);

    // back button handler
    const handleBack = () => {
        if (currentIndex > 0) {
            setActiveAction(steps[currentIndex - 1].title);
        }
    };

    return (
        <div className='  mt-[21px] ' >
            <div className='flex flex-col justify-center  ' >
                <h2 className='text-center font-manrope font-semibold text-myGray text-[17.5px] ' >Choose Your Purchase Option</h2>
                <p className='text-center font-manrope text-sm text-[#717182] ' >Select a pre-built bundle for the best value, or customize your credit amount</p>
                <div className="grid grid-cols-1 md:grid-cols-2   gap-4 mt-4">
                    {/* Credit Bundles Card */}
                    <div
                        className=" border border-[#0000001A] rounded-[12.75px] p-4  bg-white"
                    >
                        <div className='relative mb-[20.12px] ' >
                            <div className='flex gap-[10.94px] ' >

                                <span className='h-[42px] w-[42px] bg-[#FFE3CA] rounded-[8.75px] flex items-center justify-center  ' ><CreditBundleIcon /></span>
                                <div>
                                    <h3 className="font-manrope text-sm ">Credit Bundles</h3>
                                    <p className='font-manrope text-[12.3px] text-[#717182]  ' >Pre-configured packages with savings</p>
                                </div>
                            </div>
                            {/* Recommended */}
                            <span className='absolute right-0 top-0 rounded-[6.75px] w-[109.98px] bg-[#DCFCE7] text-[#008236] 
                             font-manrope text-[10.5px] flex items-center justify-center py-[3px] ' > <StarIcon className="text-[#008236] mr-[3.49px] " /> Recommended</span>
                        </div>
                        <ul className=" text-myGray space-y-1 font-manrope text-[12.3px] ">
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Up to 30% savings</li>
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Instant delivery</li>
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Popular denominations</li>
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Bonus features included</li>
                        </ul>
                        <div className="mt-5 text-sm  bg-[#EFF6FF] py-[13.11px] text-[12.3px] text-myGray font-manrope px-[14px] rounded-[8.75px]  ">
                            <span className='font-bold text-[12.3px] ' >Most Popular: </span>
                            Professional (500 credits) - Save 20%
                        </div>
                    </div>

                    {/* Custom Amount Card */}
                    <div
                        className=" border border-[#0000001A] rounded-[12.75px] p-4  bg-white"
                    >
                        <div className=' mb-[20.12px] ' >
                            <div className='flex gap-[10.94px] ' >

                                <span className='h-[42px] w-[42px] bg-[#F3E8FF] rounded-[8.75px] flex items-center justify-center  ' ><ConfigureCalculatorIcon className="text-[#9810FA] " /></span>
                                <div>
                                    <h3 className="font-manrope text-sm ">Custom Amount</h3>
                                    <p className='font-manrope text-[12.3px] text-[#717182]  ' >Choose your exact credit amount</p>
                                </div>
                            </div>

                        </div>
                        <ul className=" text-myGray space-y-1 font-manrope text-[12.3px] ">
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Any amount from 1 credit</li>
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Flexible payment options</li>
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Pay exactly what you need</li>
                            <li className='flex items-center gap-x-1' ><TickIcon className="text-[#008236]" /> Standard $0.10 per credit</li>
                        </ul>
                        <div className="mt-5 text-sm  bg-[#FAFAFA] py-[13.11px] text-[12.3px] text-myGray font-manrope px-[14px] rounded-[8.75px]  ">
                            Perfect for specific amounts or trying out the platform
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center items-center mt-5 gap-4 text-[#030213] ">
                    <SimpleButton
                        icon={<ButtonBackIcon />}
                        title="Back"
                        onClick={handleBack}
                        disabled={currentIndex === 0} // disable on first step

                    />
                    <SimpleButton
                        icon={<ConfigureCalculatorIcon />}
                        title="Next Step"
                        onClick={() => {
                            if (currentIndex < steps.length - 1) {
                                setActiveAction(steps[currentIndex + 1].title);
                            }
                        }}
                    />
                </div>
            </div>

            {/* available credits cards */}
            <div className='mt-4  h-max ' >
                <h1 className='text-center font-manrope text-sm text-myGray ' >Available Credit Bundles</h1>
                <CreditBundles />
            </div>

            {/* </div> */}
        </div>
    )
}

export default ChoosePurchaseOption