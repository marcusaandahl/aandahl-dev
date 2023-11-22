import AddExerciseButton from "@/app/fitness/exercises/components/AddExerciseButton";
import {ReactNode} from "react";
import Link from "next/link";
import ButtonLink from "@/app/components/ButtonLink";

export default function ExercisesLayout({
    children,
    modals
}: {
    children: ReactNode,
    modals: ReactNode
}) {
    return (
        <>
            {modals}
            <div className="w-full p-8 flex flex-col gap-4">
                <div>
                    <h1>Exercises</h1>
                    <ButtonLink
                        text="Add Exercise"
                        href="/fitness/exercises/addExercise"
                    />
                </div>
                {children}
            </div>
        </>
    )
}