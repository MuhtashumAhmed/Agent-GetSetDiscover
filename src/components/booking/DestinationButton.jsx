import React from "react";

export function DestinationButton({ className = "", children, ...props }) {
    return (
        <button

            className={`my-4  rounded-[5px] text-base font-manrope bg-primary-background  cursor-pointer text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
