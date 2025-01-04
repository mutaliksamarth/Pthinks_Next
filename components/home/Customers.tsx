import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Customers from "@/assets/Home/cust-logos.png";

const CustomerSection = () => {
  return (
    <Card className="w-full border-none shadow-none">
      {/* Hero section with gradient background */}
        <CardHeader
            className="py-16 pt-34">
            <div
                className="max-w-3xl mx-auto px-4">
                <CardTitle
                    className="text-4xl md:text-5xl font-bold text-center mb-6">
                    We Are Working With
                </CardTitle>

                {/* Simple modern accent line */}
                <div
                    className="flex justify-center">
                    <div
                        className="h-1 w-24 bg-black rounded-full"/>
                </div>
            </div>
        </CardHeader>

      <CardContent className="max-w-7xl mx-auto px-4 py-1">
        <Image src={Customers} alt="Customers" className="w-full h-auto" />
     
      </CardContent>
    </Card>
  );
};

export default CustomerSection;