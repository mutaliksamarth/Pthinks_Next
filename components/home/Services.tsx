import { HoverEffect } from "../ui/card-hover-effect";
import {
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8 bg-white">
            <CardHeader
                className="py-16 pt-34">
                <div
                    className="max-w-3xl mx-auto px-4">
                    <CardTitle
                        className="text-4xl md:text-5xl font-bold text-center mb-6">
                        Our Services
                    </CardTitle>

                    {/* Simple modern accent line */}
                    <div
                        className="flex justify-center">
                        <div
                            className="h-1 w-24 bg-black rounded-full"/>
                    </div>
                </div>
            </CardHeader>

            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];
