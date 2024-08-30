import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./global.css";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Retro Olympics",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <main
                    className="flex min-h-dvh flex-col items-center justify-center
                        bg-[radial-gradient(75%_75%_at_50%_25%,rgba(0,0,0,0.7)_0%,rgb(0,0,0,0.95)_100%)]
                        bg-fixed px-16 py-16 text-center text-white"
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
