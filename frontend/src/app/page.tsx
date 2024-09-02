import Image from "next/image";
import Link from "next/link";

// TODO: add volunteers link

export default function Home() {
    return (
        <>
            <div className="flex flex-1 items-center justify-center gap-16 self-stretch">
                <Link
                    href="/olympics"
                    className="peer/olympics group relative flex max-w-[300px] flex-1 flex-col items-center
                        justify-center gap-1 font-farray text-4xl text-white"
                >
                    <p
                        className="trasition-transform absolute top-6 z-10 duration-500
                            [text-shadow:2px_1px_2px_black;] group-hover:-translate-y-1
                            group-hover:scale-110"
                    >
                        Retro <span className="text-olympics">Olympics</span>
                    </p>
                    <Image
                        className="duration-250 rounded-2xl shadow-olympics transition-shadow ease-linear
                            group-hover:shadow-[0_0_40px_var(--tw-shadow-color)]"
                        src="/img/olympics-landing.png"
                        alt="Retro Olympics"
                        width={300}
                        height={425}
                    />
                    <span className="text-lg">New Season 2025</span>
                    <Image
                        className="fixed left-0 top-[-50vh] -z-10 h-[150vh] w-screen object-cover opacity-0
                            transition-opacity duration-500 group-hover:opacity-100"
                        src="/img/olympics-landing.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                    />
                </Link>
                <Link
                    href="/colosso"
                    className="group relative flex max-w-[300px] flex-1 flex-col items-center justify-center
                        gap-1 font-farray text-4xl text-white"
                >
                    <p
                        className="trasition-transform absolute top-6 z-10 duration-500
                            [text-shadow:2px_1px_2px_black;] group-hover:-translate-y-1
                            group-hover:scale-110"
                    >
                        Retro <span className="text-colosso">Colosso</span>
                    </p>
                    <Image
                        className="duration-250 rounded-2xl shadow-colosso transition-shadow ease-linear
                            group-hover:shadow-[0_0_40px_var(--tw-shadow-color)]"
                        src="/img/colosso-landing.png"
                        alt="Retro Colosso"
                        width={300}
                        height={425}
                    />
                    <span className="text-lg">Coming soon!</span>
                    <Image
                        className="fixed left-0 top-[-50vh] -z-10 h-[150vh] w-screen object-cover opacity-0
                            transition-opacity duration-500 group-hover:opacity-100"
                        src="/img/colosso-landing.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                    />
                </Link>
            </div>
            <div>
                <Link
                    href="/volunteers"
                    className="text-xl underline decoration-transparent transition hover:decoration-white"
                >
                    Volunteers
                </Link>
            </div>
        </>
    );
}
