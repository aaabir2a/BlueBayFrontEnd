import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutUs />
      <WhyChooseUs
        title="WHY CHOOSE US obout us page"
        subtitle="We Provide Outsourced IT Services For your business"
        backgroundImage="/whychooseus.png?height=800&width=1600"
        supportCard={{
          title: "24/7 Customer support",
          description:
            "Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no.",
          phone: "+123 456 7890",
        }}
      />
    </div>
  );
};

export default page;
