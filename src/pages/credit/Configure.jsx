import React from 'react'
import { BackArrow, ButtonBackIcon, ConfigureCalculatorIcon, CreditBundleIcon, DollarIcon, StarIcon, TickIcon } from '../../assets/icons/Icons'
import SimpleButton from '../../components/SimpleButton';
import CreditCalculator from './CreditCalculator';

const bullets =["✓ Instant credit delivery" , "✓ No expiration date" , "✓ Secure payment processing"]

const Configure = ({ steps, activeAction, setActiveAction }) => {

    // helper to get index of current step
    const currentIndex = steps.findIndex((s) => s.title === activeAction);

    // back button handler
    const handleBack = () => {
        if (currentIndex > 0) {
            setActiveAction(steps[currentIndex - 1].title);
        }
    };

    return (
        <div className='flex justify-center mt-[21px]  ' >
            <div>
                <h2 className='flex items-center gap-x-2 justify-center text-center font-manrope  text-myGray text-[17.5px] ' >
                    <ConfigureCalculatorIcon className="text-[#9810FA] " />
                    Custom Credit Amount</h2>
                <p className='text-center font-manrope text-sm text-[#717182] ' >Choose the exact number of credits you need</p>
                <div className=" mt-4">
                    {/* Credit Bundles Card */}
                    <div className=' w-full max-w-[587.989px] border border-[#0000001A] p-5 rounded-[12.75px] ' >
                        <h1 className='flex items-center gap-x-2 text-[#030213] '><DollarIcon /> Configure Your Purchase</h1>
                        {/* form */}
                        <CreditCalculator />

                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center items-center mt-5 gap-4 text-[#030213]  ">
                        <SimpleButton
                            icon={<ButtonBackIcon />}
                            title="Back to Options"
                            onClick={handleBack}
                            disabled={currentIndex === 0} // disable on first step
                        />
                        <SimpleButton
                            // icon={<ConfigureCalculatorIcon />}
                            title="Continue to Payment • $10.00"
                            onClick={() => {
                                if (currentIndex < steps.length - 1) {
                                    setActiveAction(steps[currentIndex + 1].title);
                                }
                            }}
                            className='w-full px-4 bg-[#030213] text-myWhite-color  font-semibold font-manrope '
                        />
                    </div>
                </div>

                {/* available credits cards */}
                <div className='flex flex-col items-center justify-center mt-4 font-manrope text-[#717182] text-[12.3px] ' >
                    {
                        bullets?.map((b,i)=>{
                            return(
                                <span key={i} className='' >{b}</span>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Configure