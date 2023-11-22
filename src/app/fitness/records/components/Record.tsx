export default function Record({
    exercise,
    record,
    unit,
    tags
}: {
    exercise: string
    record: number
    unit: string
    tags: string[]
}) {
    return (
        <div className="dark:bg-dark-800 rounded-xl p-4">
            <h3>{exercise}</h3>
            <p>{record} {unit}</p>
            <p>
                {tags.map((tag, i) => (<span key={i}>{tag}</span>))}
            </p>
        </div>
    )
}