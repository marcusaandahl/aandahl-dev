import Link from "next/link";

export default function ActivityPage({
    params
}: {
    params: { activity: string }
}) {
    return (
        <div className="w-full p-8 flex flex-col gap-4">
            <Link href={"/fitness/planner"}>Back to planner</Link>
            <h1>Planning {params.activity[0].toUpperCase() + params.activity.slice(1)}</h1>
        </div>
    )
}