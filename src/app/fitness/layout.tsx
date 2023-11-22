import {ReactNode} from "react";
import Navigation from "@/app/fitness/components/Navigation";

export default function FitnessLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <main className="bg-white dark:bg-dark w-screen h-screen flex flex-row">
            <Navigation />
            {children}
        </main>
    )
}