"use client"

import Button from "@/app/components/Button";

export default function AddExerciseButton() {
    return (
        <Button
            text="Add Exercise"
            onClick={() => console.log("HI")}
        />
    )
}