import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-white dark:bg-dark w-screen h-screen">
            <Link href={"/fitness"}>Fitness page</Link>
        </main>
    )
}