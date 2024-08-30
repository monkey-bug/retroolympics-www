import Image from "next/image";
import Link from "next/link";

// TODO: add volunteers link

export default function Home() {
    return (
        <div className="flex items-center justify-center flex-1 self-stretch gap-16">
            <Link href="/olympics" className="group peer/olympics font-farray flex-1 relative max-w-[300px] flex items-center justify-center flex-col text-4xl text-white gap-1">
                <p className="absolute top-6 z-10 trasition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 [text-shadow:2px_1px_2px_black;]">Retro <span className="text-olympics">Olympics</span></p>
                <Image className="rounded-2xl shadow-olympics transition-shadow duration-250 ease-linear group-hover:shadow-[0_0_40px_var(--tw-shadow-color)]" src="/img/olympics-landing.png" alt="Retro Olympics" width={300} height={425} />
                <span className="text-lg">New Season 2025</span>
                <img className="fixed top-[-50vh] left-0 -z-10 w-screen h-[150vh] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="/img/olympics-landing.png" />
            </Link>
            <Link href="/colosso" className="group font-farray flex-1 relative max-w-[300px] flex items-center justify-center flex-col text-4xl text-white gap-1">
                <p className="absolute top-6 z-10 trasition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 [text-shadow:2px_1px_2px_black;]">Retro <span className="text-colosso">Colosso</span></p>
                <Image className="rounded-2xl shadow-colosso transition-shadow duration-250 ease-linear group-hover:shadow-[0_0_40px_var(--tw-shadow-color)]" src="/img/colosso-landing.png" alt="Retro Colosso" width={300} height={425} />
                <span className="text-lg">Coming soon!</span>
                <img className="fixed top-[-50vh] left-0 -z-10 w-screen h-[150vh] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="/img/colosso-landing.png" />
            </Link>
        </div>
    );
}
