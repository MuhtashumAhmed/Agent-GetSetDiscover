import React from 'react'
import { BackArrow, ConfigureCalculatorIcon, CreditBundleIcon, StarIcon, TickIcon } from '../../assets/icons/Icons'
import SimpleButton from '../../components/SimpleButton';
import { useNavigate } from 'react-router-dom';
import PaymentSuccess from '../../components/credit/PaymentSuccess';




const Complete = ({ steps, activeAction, setActiveAction }) => {
    const navigate = useNavigate()

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
                {/* <h2 className='text-center font-manrope font-semibold text-myGray text-[17.5px] ' >Compleet</h2> */}
                <PaymentSuccess />

                {/* Buttons */}
                <div className="flex justify-center items-center mt-5 gap-4 ">
                    <SimpleButton
                        icon={<BackArrow className="text-[5px]" />}
                        title="Continue to Dashboard"
                        onClick={() => navigate("/dashboard")}
                        disabled={currentIndex === 0} // disable on first step
                        className='bg-myBlack text-myWhite-color px-4'
                    />

                </div>
                <p className='text-[#717182] text-[10.5px] font-manrope text-center mt-4 ' >Thank you for your purchase! Your credits are ready to use.</p>

          

            </div>
        </div>
    )
}

export default Complete