import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import Mission from "../../assets/Home/mission.webp";
import Vission from "../../assets/Home/vission.webp";

export default function VisionMissionCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            {/* Mission Card */}
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className="p-6"
            >
                <div className="max-w-xl">
                    <h2 className="text-left text-3xl font-bold text-dark mb-4">
                        OUR MISSION
                    </h2>
                    <p className="text-dark-200 mb-6">
                        Transforming challenges into seamless solutions with innovation and excellence.
                        We are dedicated to delivering impactful results while upholding strong ethical standards.
                    </p>

                    <ul className="space-y-4 text-dark-200">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/20 p-1 rounded">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <span>Empower businesses with pioneering C++, Qt, and QML software solutions.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/20 p-1 rounded">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <span>Uphold excellence and deliver exceptional results with every project.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/20 p-1 rounded">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <span>Maintain strong ethical standards and foster transparency in all interactions.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/20 p-1 rounded">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <span>Build long-term client partnerships through tailored solutions and support.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/20 p-1 rounded">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <span>Integrate sustainability into operations for eco-friendly growth.</span>
                        </li>
                    </ul>
                </div>

            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <Image
                    src={Mission}
                    alt="Mission"
                    className="w-full h-auto"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <Image
                    src={Vission}
                    alt="Mission"
                    className="w-full h-auto"
                />
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className="p-6"
            >
                <div
                    className="max-w-xl">
                    <h2 className="text-left text-3xl font-bold text-dark mb-4">
                        OUR
                        VISION
                    </h2>
                    <p className="text-dark-200 mb-6">
                        Leading
                        in
                        technology
                        and
                        setting
                        new
                        standards
                        through
                        cutting-edge
                        innovation.
                        We
                        strive
                        to
                        inspire
                        growth
                        and
                        drive
                        progress
                        in
                        every
                        sector
                        we
                        touch.
                    </p>

                    <ul className="space-y-4 text-dark-200">
                        <li className="flex items-start gap-3">
                            <div
                                className="mt-1 bg-green-500/20 p-1 rounded">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full"/>
                            </div>
                            <span>Lead globally in C++, Qt, and QML software development and innovation.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div
                                className="mt-1 bg-green-500/20 p-1 rounded">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full"/>
                            </div>
                            <span>Set new benchmarks with cutting-edge, high-impact software solutions.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div
                                className="mt-1 bg-green-500/20 p-1 rounded">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full"/>
                            </div>
                            <span>Inspire continuous learning and stay ahead of industry trends.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div
                                className="mt-1 bg-green-500/20 p-1 rounded">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full"/>
                            </div>
                            <span>Enable businesses to achieve extraordinary outcomes with our technology.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div
                                className="mt-1 bg-green-500/20 p-1 rounded">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full"/>
                            </div>
                            <span>Champion ethical practices and create a positive environmental impact.</span>
                        </li>
                    </ul>
                </div>
            </WobbleCard>


        </div>
    );
}