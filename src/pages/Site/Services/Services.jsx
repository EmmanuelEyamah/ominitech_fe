import { useState } from "react";
import { 
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Carousel
} from "@material-tailwind/react";
import { services } from "./services";

export const Services = () => {
  const [activeTab, setActiveTab] = useState("web");

  // Filter images based on the active tab
  const activeImages = services.find((service) => service.value === activeTab)?.images;

 
  return (
    <div className=" mx-auto min-h-screen flex flex-col lg:flex-row lg:flex gap-5 mt-auto px-1 lg:px-6">
      <div className="item-center lg:items-start w-full lg:w-1/2 flex flex-col gap-5">
        <Typography 
            className="text-2xl font-bold lg:text-[44px] text-[#10c8ff] mb-1 lg:mb-4"
        >
            Our Services
        </Typography>
        <Typography 
            className="text-xl font-bold lg:text-2xl text-white mb-1 lg:mb-4"
        >
            Empowering Your Success: Our Range of Tailored Solutions
        </Typography>

        <div className="mt-5">
          <Tabs value={activeTab} className="max-w-[40rem]">
            <TabsHeader
              className="bg-transparent"
              indicatorProps={{
                className: "bg-[#10c8ff] shadow-md text-white",
              }}
            >
              {services.map(({ label, value }) => (
                <Tab key={value} value={value} className="text-white text-sm lg:text-base" onClick={() => setActiveTab(value)}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {services.map(({ value, desc, category }) => (
                <TabPanel key={value} value={value} className="py-2 text-[#fff] opacity-70">
                  {desc}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    {category.map((item, index) => {
                      return (
                      <div className="py-3 w-full lg:w-[300px]" key={`category-box-${index}`}>
                        <Typography 
                            className="text-lg font-bold lg:text-xl text-[#10c8ff] mb-1 lg:mb-4"
                        >
                            {item.name}
                        </Typography>
                        <Typography 
                            className="font-light text-white mb-1 lg:mb-4"
                        >
                            {item.desc}
                        </Typography>
                      </div>
                      )
                    })}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full lg:h-1/2">
          <Carousel
            autoplay={true}
            loop={true}
          >
            {activeImages?.map((image, index) => (
              <img
                key={`carousel-image-${index}`}
                src={image.image}
                alt={`image ${index + 1}`}
                className="h-100 w-full object-cover object-center"
              />
            ))}
          </Carousel>
      </div>
    </div>
  );
};
