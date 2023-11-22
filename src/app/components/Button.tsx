"use client"
import {ButtonHTMLAttributes} from "react";

type ButtonProps = {
    text: string
} & ButtonHTMLAttributes<HTMLButtonElement>


export default function Button({
    text,
    ...props
}: ButtonProps) {

    return (
        <button
            {...props}
        >
            {text}
        </button>
    )
}