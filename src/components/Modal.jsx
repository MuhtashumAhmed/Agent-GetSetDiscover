import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isModalOpen, onClose, children, showCloseButton = true , className="" }) => {
    return (
        <AnimatePresence>
            {/* {isModalOpen && ( */}
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                onClick={onClose} // ✅ backdrop click = close
            >
                <motion.div
                    // className="max-w-[87dvw] absolute bg-myWhite-color rounded-[12.75px] m-1.5 md:m-0 shadow-lg pt-[23px] pb-[5.2px] px-1 md:px-[21px]"
                    className={`max-w-[87dvw] absolute bg-myWhite-color rounded-[12.75px] m-1.5 md:m-0 shadow-lg pt-[23px] pb-[5.2px] px-1 md:px-[21px] ${className} `}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    onClick={(e) => e.stopPropagation()} // ✅ andar click prevent karega
                >
                    {/* Conditionally show Close button */}
                    {!showCloseButton && (
                        <div className="h-12 w-12 rounded-full grid items-center justify-center bg-myWhite-color absolute top-[-25px] left-1/2 transform -translate-x-1/2 shadow">
                            <button
                                onClick={onClose}
                                className="text-[#989898] hover:text-black"
                            >
                                <IoClose className="font-extrabold text-2xl" />
                            </button>
                        </div>
                    )}

                    {/* Content */}
                    <div className="mt-3"

                    >{children}</div>
                </motion.div>
            </motion.div>
            {/* )} */}
        </AnimatePresence>
    );
};

export default Modal;
