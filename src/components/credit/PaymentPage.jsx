import React, { useState } from "react";
import { BankTransferIcon, ExclamationIcon, LockIcon, MobileIcon, PaymentCardIcon, ShieldIcon, TickIcon } from "../../assets/icons/Icons";

// ✅ Reusable Input Component
const InputField = ({ label, type = "text", placeholder, value, onChange, className }) => {
    return (
        <div className={`flex flex-col space-y-1 ${className}`}>
            {label && <label className="text-[12.3px] font-manrope font-semibold text-myGray">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 rounded-[6.75px] text-sm outline-none  bg-[#F5F5F5] text-[12.3px] font-manrope text-[#717182] border-none  "
            />
        </div>
    );
};

const PaymentPage = ({ setTotal }) => {
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 font-manrope ">
            {/* LEFT SIDE - FORM */}
            <div className="lg:col-span-2 space-y-6">
                {/* Payment Method */}
                <div className="bg-white  rounded-xl p-6 border border-[#0000001A] ">
                    <h3 className="text-sm text-myGray mb-4">Payment Method</h3>
                    <div className="space-y-3">
                        {[
                            { id: "card", label: "Credit/Debit Card", badge: "Most Popular", icon: <PaymentCardIcon /> },
                            { id: "bank", label: "Bank Transfer", icon: <BankTransferIcon /> },
                            { id: "wallet", label: "Digital Wallet", icon: <MobileIcon /> },
                        ].map((method) => (
                            <label
                                key={method.id}
                                className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition ${paymentMethod === method.id ? "border-black" : "border-gray-300"
                                    }`}
                            >
                                <div className="flex items-center gap-2 text-[12.3px] font-semibold text-[#030213] ">
                                    <input
                                        type="radio"
                                        checked={paymentMethod === method.id}
                                        onChange={() => setPaymentMethod(method.id)}
                                        className="
                                        appearance-none w-[5.825000286102295px] h-[5.825000286102295px] rounded-full
                                        border border-transparent
                                        checked:border-black checked:bg-black
                                        focus:ring-1 focus:ring-black
                                        cursor-pointer
                                    "
                                    />

                                    {
                                        method?.icon && (
                                            <span>{method.icon}</span>

                                        )
                                    }
                                    <span>{method.label}</span>
                                </div>
                                {method.badge && (
                                    <span className="text-[10.5px] font-semibold font-manrope bg-[#ECEEF2] text-[#030213] px-2 py-0.5 rounded-[6.75px]">
                                        {method.badge}
                                    </span>
                                )}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Card Information */}
                {paymentMethod === "card" && (
                    <div className="bg-white  rounded-xl p-6 border border-[#0000001A] ">
                        <h3 className="text-sm text-myGray mb-4">Card Information</h3>
                        <div className="flex flex-col gap-4">
                            <InputField placeholder="1234 5678 9012 3456" label="Card Number" />
                            <div className="flex flex-col md:flex-row gap-[13.99px] ">

                                <InputField placeholder="MM/YY" label="Expiry Date" className="flex-1" />
                                <InputField placeholder="123" label="CVV" className="flex-1" />
                            </div>
                            <InputField placeholder="John Doe" label="Name on Card" />
                        </div>
                    </div>
                )}

                {/* Contact Info */}
                <div className="bg-white  rounded-xl p-6 border border-[#0000001A] " >
                    <h3 className="text-sm text-myGray mb-4">Contact Information</h3>
                    <InputField type="email" placeholder="john@example.com" label="Email Address" />
                    <p className="mt-1.5 text-[10.5px] font-manrope text-[#717182] " >We'll send your receipt and credit confirmation to this email</p>
                </div>

                {/* Billing Address */}
                <div className="bg-white  rounded-xl p-6 border border-[#0000001A] ">
                    <h3 className="text-sm text-myGray mb-4">Billing Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField placeholder="123 Main Street" label="Street Address" className="md:col-span-2" />
                        <InputField placeholder="New York" label="City" />
                        <InputField placeholder="NY" label="State" />
                        <InputField placeholder="10001" label="ZIP Code" />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - ORDER SUMMARY (sticky) */}
            <div className="lg:col-span-1 ">
                <div className="sticky top-6" >
                    <div className=" bg-white font-manrope rounded-[12.75px] p-6 border border-[#0000001A] space-y-4">
                        <h3 className="text-sm text-[#0A0A0A] ">Order Summary</h3>
                        <div className="text-sm  space-y-1">
                            <div className="flex justify-between text-[#0A0A0A]">
                                <span>Credits</span>
                                <span>100</span>
                            </div>
                            <div className="flex justify-between text-[12.3px] text-[#717182] ">
                                <span>Price per credit</span>
                                <span>$0.10</span>
                            </div>
                            <div className="flex justify-between text-[15.8px] text-[#0A0A0A] font-semibold pt-2 border-t">
                                <span>Total</span>
                                <span>$10.00</span>
                            </div>
                        </div>
                        <div className="px-[10.5px] text-[#008236] bg-[#EFF6FF] h-[38.104px] rounded-[8.75px] flex items-center  text-sm mt-2">
                            <TickIcon className="mr-2" /> Instant credit delivery
                        </div>
                        <div className="text-xs text-gray-500 mt-2 space-y-1">
                            <p className="flex items-center gap-1.5" ><LockIcon /> 256-bit SSL encryption</p>
                            <p className="flex items-center gap-1.5" ><ShieldIcon /> PCI DSS compliant</p>
                        </div>

                    </div>
                    <div className="h-[145.9600067138672px] border border-[#BEDBFF] bg-[#EFF6FF] mt-[21px] rounded-[12.75px] pt-[15.24px] px-[22.25px] ">
                        <p className="flex items-center gap-1.5 text-[#1C398E] text-sm font-manrope " ><ExclamationIcon /> Secure Payment</p>
                        <p className="text-sm font-manrope text-[#1447E6] max-w-[189px] ml-3" > Your payment information is
                            encrypted and processed
                            securely. We never store your
                            card details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
