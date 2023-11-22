import Goal from "@/app/fitness/goals/components/Goal";

export default function GoalsSlot() {
    return (
        <div className="w-full p-8 flex flex-col gap-4">
            <h1>Goals</h1>
            <div className="flex flex-row flex-wrap gap-4">
                <Goal
                    exercise={"Bench Press"}
                    goal={120}
                    unit={"kg"}
                    tags={["strength", "chest", "alpha group"]}
                    current={100}
                />
            </div>
        </div>
    )
}