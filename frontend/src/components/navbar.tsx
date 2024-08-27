import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

// TODO: mobile menu
// TODO: olympics/colosso specific styling

export default function Navbar() {
    const userName = cookies().get("user");

    return (
        <header
            className="fixed flex h-16 w-full items-center justify-between bg-black/60 text-white
                backdrop-blur"
        >
            <div className="flex items-center">
                <div className="group border-r-2 border-white/20">
                    <Link href="/">
                        <Image
                            className="min-w-16 hover:drop-shadow-[0_0_4px_white]"
                            src="/img/logo/olympics.png"
                            alt="Retro Olympics"
                            width={64}
                            height={64}
                        />
                    </Link>
                    <div
                        className="absolute left-[calc(-4rem-2px)] top-16 flex flex-col border-r-2 border-white/20
                            bg-black/60 backdrop-blur transition-[left] group-hover:left-0"
                    >
                        <Link href="/colosso">
                            <Image
                                className="hover:drop-shadow-[0_0_4px_white]"
                                src="/img/logo/colosso.png"
                                alt="Retro Colosso"
                                width={64}
                                height={64}
                            />
                        </Link>
                    </div>
                </div>
                <Link
                    href="/"
                    className="ml-4 flex h-full flex-col flex-wrap items-start justify-center text-2xl
                        uppercase underline decoration-transparent decoration-1 underline-offset-2
                        transition hover:decoration-white sm:flex-row sm:flex-nowrap sm:items-center
                        sm:text-3xl"
                >
                    Retro
                    <span className="mt-[-0.5rem] text-olympics sm:mt-0">
                        Olympics
                    </span>
                </Link>
            </div>
            <nav className="flex h-full items-center justify-center divide-x-2 divide-white/20">
                {[
                    { href: "/", title: "Teams" },
                    { href: "/", title: "Standings" },
                    { href: "/", title: "Schedule" },
                    { href: "/", title: "Games" },
                    { href: "/betting", title: "Betting" },
                    { href: "/volunteers", title: "Volunteers" },
                    {
                        href: "/",
                        title: userName != undefined ? userName.value : "USER",
                    },
                ].map((link) => (
                    <Link
                        className="flex h-1/2 items-center px-4 underline decoration-transparent underline-offset-2
                            transition hover:decoration-white"
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
