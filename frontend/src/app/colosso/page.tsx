export default function ColossoHome() {
    return (
        <div
            className="flex w-full flex-1 items-center justify-center py-16
                [@media(min-aspect-ratio:4/3)]:flex-col"
        >
            <iframe
                className="aspect-video flex-1"
                src="https://www.youtube-nocookie.com/embed/WoezWo5yxVk?si=wrzsl-qWTEJuyhkx"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}
