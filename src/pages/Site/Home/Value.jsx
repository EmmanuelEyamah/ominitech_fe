import { FC, useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography
} from "@material-tailwind/react";

export const Value = () => {
  const [activeTab, setActiveTab] = useState("integrity");
  const [orientation, setOrientation] = useState("vertical");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setOrientation("horizontal");
      } else {
        setOrientation("vertical");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial orientation check
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const data = [
    {
      label: "Integrity",
      value: "integrity",
      desc: `Integrity serves as the cornerstone of Ominitech's operations, guiding every decision and action we take. We believe that integrity is non-negotiable; it is the foundation upon which trust is built and sustained. At Ominitech, we adhere unwaveringly to the highest ethical standards, conducting ourselves with honesty, transparency, and accountability in all aspects of our work. We prioritize the interests of our clients, employees, and stakeholders above all else, striving to foster long-term relationships built on mutual respect and integrity. By upholding integrity in everything we do, we not only earn the trust and confidence of those we serve but also cultivate a culture of integrity that permeates every facet of our organization. At Ominitech, integrity isn't just a value—it's a way of life`,
    },
    {
      label: "Innovation",
      value: "innovation",
      desc: `Innovation lies at the heart of Ominitech's ethos, driving our commitment to pushing the boundaries and exploring new horizons in the digital landscape. We believe that innovation is not just about creating something new; it's about envisioning possibilities that others may overlook and daring to pioneer solutions that revolutionize the way we work, interact, and live. By fostering a culture of curiosity, experimentation, and forward-thinking, we empower our team to embrace change, challenge conventions, and continuously seek innovative approaches to address complex problems. At Ominitech, we see innovation as a catalyst for growth, enabling us to stay ahead of the curve, anticipate future trends, and deliver transformative results for our clients and partners.`,
    },
    {
      label: "Collaboration",
      value: "collaboration",
      desc: `Collaboration is the cornerstone of Ominitech's business strategy, underpinning our commitment to delivering exceptional results. We recognize that effective collaboration is essential for driving innovation, fostering creativity, and achieving sustainable growth. At Ominitech, we prioritize building strong partnerships with our clients and stakeholders, working closely together to identify opportunities, address challenges, and capitalize on emerging trends. Our collaborative approach is characterized by open communication, mutual respect, and a shared commitment to excellence. By harnessing the collective expertise and resources of our team and partners, we are able to deliver tailored solutions that meet the unique needs of our clients and exceed their expectations. At Ominitech, we view collaboration not just as a means to an end, but as a fundamental driver of success in today's dynamic business environment.`,
    },
    {
      label: "Customer-Centricity",
      value: "customer",
      desc: `At Ominitech, we uphold a steadfast commitment to customer-centricity, which forms the bedrock of our operations. We recognize that our clients are the lifeblood of our business, and their satisfaction and success are paramount. From the initial consultation to project completion, we prioritize understanding our clients' unique needs, objectives, and challenges. By meticulously tailoring our solutions to address these requirements, we ensure that every engagement yields tangible value and fosters long-term partnerships. Our approach is characterized by a dedication to excellence, integrity, and personalized service, aimed at exceeding client expectations at every turn. At Ominitech, we stand ready to serve as your trusted partner in achieving your business objectives and realizing your vision.`,
    },
    
  ];

  return (
    <div className="container mx-auto min-h-full flex-col flex gap-30 py-[40px]">
        <Typography
          className="text-4xl text-[#10c8ff] font-light lg:text-[54px]  mb-2 lg:mb-4"
        >
          Our Values
        </Typography>
        <Typography
          className="text-xl text-[#fff] font-light opacity-50 lg:text-2xl mb-2 lg:mb-4"
        >
          Empowering Success: Our Values Drive Every Decision
        </Typography>
        <div>
          <Tabs 
            value={activeTab} 
            orientation={orientation}
          >
            <TabsHeader 
              className="rounded-none text-white bg-transparent p-3 w-[400px]"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-[#10c8ff] shadow-md rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab 
                  key={value} 
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-3xl text-[#10c8ff]" : "text-3xl text-white"}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="py-2 text-[#fff] opacity-10">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
    </div>
  );
};
