import Modal from "@/app/components/Modal";
import {addExercise} from "@/app/actions/Exercises";
import Button from "@/app/components/Button";

export default function AddExerciseModal() {
    return (
        <Modal
            title="Add Exercise"
            description="Add an exercise to be part of your exercise compendium"
        >
            <form action={addExercise}>
                <input type="text" name="exerciseName" />
                <input type="text" name="muscles" />
                <Button
                    type="submit"
                    text="Add Exercise"
                />
            </form>
        </Modal>
    )
}