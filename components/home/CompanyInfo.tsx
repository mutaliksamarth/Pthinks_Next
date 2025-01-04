import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code, Clock, GraduationCap } from 'lucide-react';

const CompanyInfo = () => {
  const features = [
    {
      title: "Timely Project Delivery",
      description: "Our streamlined development processes ensure efficient and timely delivery of your projects, without compromising on quality.",
      icon: Clock
    },
    {
      title: "Expert Code Review",
      description: "Our dedicated code review team focuses on optimizing your codebase, reducing unnecessary maintenance work, and enhancing overall software performance.",
      icon: Code
    },
    {
      title: "Customized Qt/Qml Training Programs",
      description: "We design training content tailored to your specific requirements, minimizing costs and training time. This approach not only accelerates competency development but also aligns with your project goals.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-50">
      <div className="w-full md:w-3/5 md:pr-2">
        {/* Company Introduction Card */}
        <Card className="bg-white rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700">PthinkS Pvt Ltd</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <p className="leading-relaxed">
              We stand out as the only company in India with a dedicated team of over 100 highly skilled Qt and QML developers. Our extensive expertise in cross-platform software development ensures that we consistently deliver top-tier projects, tailored to meet your specific needs, on time and within budget.
            </p>
            <p className="leading-relaxed">
              Whether you&apos;re seeking innovative cross-platform development solutions or specialized training in Qt and QML, PthinkS Pvt Ltd is your ideal partner.
            </p>
            <p className="leading-relaxed">
              We offer comprehensive support and cutting-edge expertise to help you succeed in today&apos;s competitive software landscape. By partnering with us, you gain access to unparalleled knowledge and resources, empowering your projects to reach new heights. Harness the full potential of Qt and QML with PthinkS Pvt Ltd and take your software solutions to the next level.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="w-px bg-gray-300 hidden md:block"></div>

      <div className="w-full md:w-1/2">
        {/* Features Card */}
        <Card className="bg-white rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700">Our Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-3">
                    <feature.icon className="w-6 h-6 text-green-700" />
                    <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyInfo;