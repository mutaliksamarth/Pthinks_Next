import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import dheerendraProfile from "../../assets/Home/Team/dheerendra-profile.webp";
import bharathProfile from "../../assets/Home/Team/bharath-profile.webp";
import vijayProfile from "../../assets/Home/Team/vijay-profile.webp";
import gopalProfile from "../../assets/Home/Team/gopal-profile.webp";
import { CardHeader, CardTitle } from "../ui/card";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            src: dheerendraProfile,
            alt: "Dheerendra V Purohit",
            name: "Dheerendra V Purohit",
            designation: "Founder & CTO",
            social: "https://www.linkedin.com/in/dheerendrap/",
            description:
                "Founder of PthinkS and Qt Champion, has 25+ years of expertise in C++, Qt, and QML, leading a team of 100+ engineers. A BITS Pilani alumnus and patent holder, he collaborates with top firms like Mercedes Benz, Siemens, Baxter, NXP, etc.",
        },
        {
            src: gopalProfile,
            alt: "Gopalkrishnan Lakshmi",
            name: "Gopalkrishnan Lakshmi",
            designation: "Director of Growth & Strategy",
            social: "https://www.linkedin.com/company/pthinks/",
            description:
                "With 35+ years of experience, drives business expansion, strategic planning, and innovative technology solutions. Combines leadership expertise and global partnerships to foster innovation, ensuring sustainable growth and success.",
        },
        {
            src: vijayProfile,
            alt: "Vijay Mangalpally",
            name: "Vijay Mangalpally",
            designation: "Senior Architect",
            social: "https://www.linkedin.com/in/vijay-kumar-mangalpally-0215a110/",
            description:
                "With over 25+ years of experience, specializes in designing and developing advanced solutions in C++, Qt, and QML. With a wealth of technical expertise, leads complex projects and collaborates with global clients to deliver cutting-edge software architectures.",
        },
        {
            src: bharathProfile,
            alt: "Bharath R",
            name: "Bharath Renukaswamy",
            designation: "Manager–Learning and Development",
            social: "https://www.linkedin.com/in/withbharath/",
            description:
                "With 17+ years of experience, excels in designing training programs, fostering leadership, and managing operations. His innovative approach drives organizational transformation and enhances workforce capabilities.",
        },
    ].map((member) => ({
        quote: member.description,
        name: member.name,
        designation: member.designation,
        src: member.src,
    }));

    return (
        <div
            className="bg-white">
            <CardHeader
                className="py-16 pt-34">
                <div
                    className="max-w-3xl mx-auto px-4">
                    <CardTitle
                        className="text-4xl md:text-5xl font-bold text-center mb-6">
                        Meet
                        Our
                        Executive
                        Team
                    </CardTitle>

                    {/* Simple modern accent line */}
                    <div
                        className="flex justify-center">
                        <div
                            className="h-1 w-24 bg-black rounded-full"/>
                    </div>
                </div>
            </CardHeader>

            {/* Content section */}
            <div>
                {/* @ts-ignore */}
                <AnimatedTestimonials //@ts-ignore
                    testimonials={testimonials}/>
            </div>
        </div>
    );
}