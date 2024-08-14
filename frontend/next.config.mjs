// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.retroachievements.org",
                port: "",
                pathname: "/UserPic/**",
            },
        ],
    },
};

export default nextConfig;
