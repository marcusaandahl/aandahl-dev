import Link from "next/link";

const activities = [
    "Strength",
    "Mobility",
    "Running",
    "Swimming",
    "Rucking",
    "Orienteering"
]

export default function PlannerSlot() {
    return (
        <div className="w-full p-8 flex flex-col gap-4">
            <h1>Planner</h1>
            <h2>Management</h2>
            <div className="flex flex-row">
                <div className="flex-1">
                    <h3>Time Slots</h3>
                    <Link href={"/fitness/schedule"}>Manage Schedule</Link>
                </div>
                <div className="flex-1">
                    <h3>Goals</h3>
                    <Link href={"/fitness/goals"}>Manage Goals</Link>
                </div>
                <div className="flex-1">
                    <h3>Exercises</h3>
                    <Link href={"/fitness/exercises"}>Manage Exercises</Link>
                </div>
            </div>
            <h2>Activities</h2>
            <div className="flex flex-row">
                {activities.map((activity, i) => {
                    return (
                        <Link
                            href={`/fitness/planner/${activity.toLowerCase()}`}
                            key={i}
                            className="flex-1"
                        >
                            <h3>{activity}</h3>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}