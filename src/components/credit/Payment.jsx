import React, { useState } from 'react'
import { BackArrow, BankTransferIcon, ButtonBackIcon, ConfigureCalculatorIcon, CreditBundleIcon, PaymentCardIcon, StarIcon, TickIcon } from '../../assets/icons/Icons'
import SimpleButton from '../../components/SimpleButton';
import PaymentPage from './PaymentPage';



const Payment = ({ steps, activeAction, setActiveAction }) => {
    const [total, setTotal] = useState()

    // helper to get index of current step
    const currentIndex = steps.findIndex((s) => s.title === activeAction);

    // back button handler
    const handleBack = () => {
        if (currentIndex > 0) {
            setActiveAction(steps[currentIndex - 1].title);
        }
    };

    return (
        <div className='flex justify-center mt-[21px] ' >
            <div>
                <h2 className='text-center font-manrope font-semibold text-myGray text-[17.5px] ' >Complete Your Purchase</h2>
                <p className='text-center font-manrope text-sm text-[#717182] ' >Enter your payment information to buy 100 credits</p>
                <div className=" mt-4">
                    <PaymentPage setTotal={setTotal} />
                </div>
                {/* Buttons */}
                <div className="flex  justify-center items-center mt-5 gap-1 sm:gap-4 text-[#030213]">
                    <SimpleButton
                        icon={<ButtonBackIcon />}
                        title="Back"
                        onClick={handleBack}
                        disabled={currentIndex === 0} // disable on first step
                        className='px-0 '
                    />
                    <SimpleButton
                        icon={<PaymentCardIcon />}
                        title="Pay $10.00"
                        onClick={() => {
                            if (currentIndex < steps.length - 1) {
                                setActiveAction(steps[currentIndex + 1].title);
                            }
                        }}
                        className='w-[200px] bg-[#030213] text-myWhite-color'
                    />
                </div>



            </div>
        </div>
    )
}

export default Payment