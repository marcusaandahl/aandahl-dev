import {ReactNode} from "react";

export default function Section({
    title,
    children
}: {
    title: string,
    children: ReactNode
}) {
    return (
        <section className="w-full h-fit dark:bg-dark-800 rounded-xl p-4">
            <h2 className="w-full border-b-2 border-b-dark-700">{title}</h2>
            {children}
        </section>
    )
}