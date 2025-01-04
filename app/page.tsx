"use client";


import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import NokiaCertifiedQTSpecialist from "../assets/Home/Blue Green Geometric Company LinkedIn Banner (3).png"
import { PthinksQuote } from "@/components/home/PthinksQuote";
import CompanyInfo from "@/components/home/CompanyInfo";
import ServiceCarousel from "@/components/home/ServiceCarousel";

import { AnimatedTestimonialsDemo } from "@/components/home/TeamInfo";
import CustomerSection
    from "@/components/home/Customers";
import VisionMissionCards from "@/components/home/Mission_Vission";
import {CardHoverEffectDemo} from "@/components/home/Services";
import {
    BackgroundGradientDemo
} from "@/components/home/MovingCards";




export default function Home() {
  return (
    <div>
        <main
            className="flex flex-col">
            <HeroHighlight
                className="grid grid-cols-1 gap-8">

                <div>
                    <motion.h1
                        initial={{
                            opacity: 2,
                            y: 20,
                        }}
                        animate={{
                            opacity: 5,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-3xl pt-0 px-4 md:text-4xl lg:text-6xl font-extrabold text-black dark:text-white leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        Unleash
                        Innovation
                        with{" "}
                        <Highlight
                            className="text-dark dark:text-white">
                            PthinkS
                        </Highlight>
                        <PthinksQuote/>
                    </motion.h1>

                </div>
                <div
                    className="pt-6">
                    <ServiceCarousel/>
                </div>
                {/* <div>
            <ServicesGrid />
          </div> */}
            </HeroHighlight>
            <div
                className="w-[200px] sm:w-[150px] md:w-[180px] lg:w-[1200px] mx-auto">
                <Image
                    src={NokiaCertifiedQTSpecialist}
                    alt="Nokia Certified QT Specialist"
                    className="w-full h-auto hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] dark:hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                />
            </div>
            <div
                className="mb-8">
                <CardHoverEffectDemo/>
            </div>

            <BackgroundGradientDemo/>



            <div
                className="mb-8">
                <CustomerSection/>
            </div>
            <div
                className="mb-8">
                <VisionMissionCards/>
            </div>

            <div
                className="mb-8">
                <AnimatedTestimonialsDemo/>
            </div>
        </main>
    </div>
  );
}
