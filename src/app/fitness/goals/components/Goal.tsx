export default function Goal({
    exercise,
    goal,
    unit,
    tags,
    current
}: {
    exercise: string
    goal: number
    unit: string
    tags: string[]
    current: number
}) {
    return (
        <div className="dark:bg-dark-800 rounded-xl p-4">
            <h3>{exercise}</h3>
            <p>{goal} {unit}</p>
            <p>
                {tags.map((tag, i) => (<span key={i}>{tag}</span>))}
            </p>
            <p>
                {current}/{goal}
            </p>
        </div>
    )
}