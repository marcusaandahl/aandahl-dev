import Record from "@/app/fitness/records/components/Record";

export default function RecordsSlot() {
    return (
        <div className="w-full p-8 flex flex-col gap-4">
            <h1>Records</h1>
            <div className="flex flex-row flex-wrap gap-4">
                <Record
                    exercise={"Bench Press"}
                    record={100}
                    unit={"kg"}
                    tags={["strength", "chest"]}
                />
            </div>
        </div>
    )
}