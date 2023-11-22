import NavigationLink from "@/app/fitness/components/NavigationLink";

export default function Navigation() {
    return (
        <nav className="h-full min-w-[100px] p-8 flex flex-col">
            <NavigationLink href={"/fitness"} exactMatch >Overview</NavigationLink>
            <NavigationLink href={"/fitness/today"}>Today</NavigationLink>
            <NavigationLink href={"/fitness/week"}>Week</NavigationLink>
            <NavigationLink href={"/fitness/goals"}>Goals</NavigationLink>
            <NavigationLink href={"/fitness/records"}>Records</NavigationLink>
            <NavigationLink href={"/fitness/planner"}>Planner</NavigationLink>
            <NavigationLink href={"/fitness/exercises"}>Exercises</NavigationLink>
            <NavigationLink href={"/fitness/schedule"}>Schedule</NavigationLink>
        </nav>
    )
}