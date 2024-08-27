import Navbar from "@/components/navbar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar site="olympics"/>
            {children}
        </div>
    );
}
