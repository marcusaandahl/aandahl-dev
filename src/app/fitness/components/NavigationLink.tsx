"use client"

import Link from "next/link";
import {ReactNode} from "react";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export default function NavigationLink({href, exactMatch, children}: {href: string, exactMatch?: boolean, children: ReactNode}) {
    const path = usePathname()

    return <Link href={href} className={clsx((exactMatch ? path == href : path.startsWith(href)) ? "text-red" : "text-white")}>{children}</Link>
}