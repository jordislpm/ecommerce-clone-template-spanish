'use client'
import React from 'react'

interface ButtonRoundProps {
    text: string;
    buttonAction: () => void
    type?: "basic" | "second"
}

function ButtonRound({ type = "basic", text, buttonAction }: ButtonRoundProps) {
    return (
        <button
            onClick={buttonAction}
            className={`${type === "basic" ?
                "rounded-2xl ring-1 ring-secundary text-secundary w-max py-2 px-4 text-xs hover:bg-secundary hover:text-white"
                :
                "rounded-3xl ring-1 ring-main bg-main text-white w-max py-3 px-5 text-sm hover:bg-white hover:text-main"
                }`}>
            {text}
        </button>
    )
}

export default ButtonRound