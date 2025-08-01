"use client"
import React from 'react'


interface ButtonRectProps {
    type?: "black" | "white";
    text: string;
    buttonAction: () => void;

}

function ButtonRect({ type = "white", text, buttonAction }: ButtonRectProps) {
    return (
        <button
            className={`text-sm rounded-md py-3 px-4 ring-1 ring-gray-300 ${type === "black" ? "bg-black text-white hover:bg-main hover:text-black" : "hover:bg-secundary hover:text-white"}`}
            onClick={buttonAction}>
            {text}
        </button>
    )
}

export default ButtonRect