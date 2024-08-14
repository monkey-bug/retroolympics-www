import Image from "next/image";

export default function RAUser({ username }: { username: string }) {
    return (
        <div className="overflow-hidden rounded-full">
            <a href={`https://retroachievements.org/user/${username}`}>
                <Image
                    width={100}
                    height={100}
                    src={`https://media.retroachievements.org/UserPic/${username}.png`}
                    alt={username}
                    title={username}
                />
            </a>
        </div>
    );
}
