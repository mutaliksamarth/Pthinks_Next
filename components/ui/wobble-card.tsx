import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
                               children,
                               containerClassName,
                               className,
                           }: {
    children: React.ReactNode;
    containerClassName?: string;
    className?: string;
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 20;
        const y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };

    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
            className={cn(
                "mx-auto w-full relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50",
                containerClassName
            )}
        >
            <div
                className="relative h-full bg-gradient-to-br from-transparent via-white/50 to-white/10 sm:mx-0 sm:rounded-2xl overflow-hidden backdrop-blur-[2px]"
                style={{
                    boxShadow: isHovering
                        ? "0 20px 40px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03), 0 10px 15px rgba(0, 0, 0, 0.06)"
                        : "0 10px 20px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.04)",
                    transition: "all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)"
                }}
            >
                <motion.div
                    style={{
                        transform: isHovering
                            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
                            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                        transition: "transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)",
                    }}
                    className={cn(
                        "h-full px-6 py-12 sm:px-10 relative z-10",
                        className
                    )}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-50" />
                    <Noise />
                    <div className="relative z-10">
                        {children}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

const Noise = () => {
    return (
        <div
            className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-[0.15] [mask-image:radial-gradient(#000,transparent,85%)]"
            style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "25%",
            }}
        ></div>
    );
};

export default WobbleCard;