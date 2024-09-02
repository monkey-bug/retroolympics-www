import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";

// TODO: mobile menu

function capitalize(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

function renderOlympicsNav() {
    const userName = cookies().get("user");

    return [
        { href: "/olympics", title: "Teams" },
        { href: "/olympics", title: "Standings" },
        { href: "/olympics", title: "Schedule" },
        { href: "/olympics", title: "Games" },
        {
            href: "/olympics",
            title: userName != undefined ? userName.value : "USER",
        },
    ].map((link, i) => (
        <Link
            className="flex h-1/2 items-center px-4 underline decoration-transparent underline-offset-2
                transition hover:decoration-white"
            href={link.href}
            key={i}
        >
            {link.title}
        </Link>
    ));
}

function renderColossoNav() {
    return (
        <p className="flex h-1/2 items-center px-4 text-neutral-500">
            Sign-Ups Coming Soon!
        </p>
    );
}

export default function Navbar({ site }: { site: "olympics" | "colosso" }) {
    const otherSite = site == "olympics" ? "colosso" : "olympics";
    const textClass = site == "olympics" ? "text-olympics" : "text-colosso";

    return (
        <header
            className="fixed inset-0 flex h-16 w-full items-center justify-between bg-black/60
                text-white backdrop-blur"
        >
            <div className="flex items-center">
                <div className="group border-r-2 border-white/20">
                    <Link href={`/${site}`}>
                        <Image
                            className="min-w-16 hover:drop-shadow-[0_0_4px_white]"
                            src={`/img/logo/${site}.png`}
                            alt={`Retro ${capitalize(site)}`}
                            width={64}
                            height={64}
                        />
                    </Link>
                    <div
                        className="duration-250 absolute left-[calc(-4rem-2px)] top-16 flex flex-col border-r-2
                            border-white/20 bg-black/60 backdrop-blur transition-[left] group-hover:left-0"
                    >
                        <Link href={`/${otherSite}`}>
                            <Image
                                className="hover:drop-shadow-[0_0_4px_white]"
                                src={`/img/logo/${otherSite}.png`}
                                alt={`Retro ${capitalize(otherSite)}`}
                                width={64}
                                height={64}
                            />
                        </Link>
                        <Link href="/">
                            <HomeIcon className="h-[64px] w-[64px] p-4 hover:drop-shadow-[0_0_4px_white]" />
                        </Link>
                    </div>
                </div>
                <Link
                    href="/"
                    className="ml-4 flex h-full flex-col flex-wrap items-start justify-center font-farray
                        text-2xl uppercase underline decoration-transparent decoration-1
                        underline-offset-[6px] transition hover:decoration-white sm:flex-row
                        sm:flex-nowrap sm:items-center sm:text-3xl"
                >
                    Retro
                    <span className={`mt-[-0.5rem] sm:mt-0 ${textClass}`}>
                        {capitalize(site)}
                    </span>
                </Link>
            </div>
            <nav className="flex h-full items-center justify-center divide-x-2 divide-white/20">
                {site == "olympics" ? renderOlympicsNav() : renderColossoNav()}
            </nav>
        </header>
    );
}
