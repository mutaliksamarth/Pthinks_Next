import { ExpandingButton } from "../ExpandingButton";

const servicesData = [
  {
    id: 1,
    title: "Qt/QML Architecture",
    points: ["Custom Qt QML Development Services", "Expert Qt QML Consulting", "Implementation of Qt QML Best Practices", "Case Studies and Success Stories"]
  },
  {
    id: 2,
    title: "Design & Development",
    points: ["Custom Design Solutions", "Comprehensive Development Services", "User-Centric Design Approach", "Innovative Development Techniques"]
  },
  {
    id: 3,
    title: "Training",
    points: ["Qt Fundamentals and Advance", "QML Essentials and Advance", "OpenGL, Qt internals, Qt3D and QML3D", "Modren C++"]
  },
  {
    id: 4,
    title: "Code Quality Analysis",
    points: ["Comprehensive Code Quality Assessment", "Advanced Code Review and testing", "Customized Recommendations", "Continuous Improvement Strategies"]
  }
];

export function ServicesGrid() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 mb-6 sm:mb-16 lg:mb-14">
        {servicesData.map((service) => (
          <ExpandingButton
            key={service.id}
            title={service.title}
            points={service.points}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}
