"use client"
import Link from "next/link";

export default function ButtonLink({
    text,
    href
}: {
    text: string,
    href: string
}) {

    return (
        <Link
            href={href}
        >
            {text}
        </Link>
    )
}