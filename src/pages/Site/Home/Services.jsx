import { FC } from "react";
import { 
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const services = [
  {
    label: "Web development", description: "At Ominitech, we specialize in creating bespoke websites tailored to your needs. Our expert team uses the latest technologies to build user-friendly and visually appealing websites that help you stand out online. From simple landing pages to complex e-commerce platforms, we've got you covered.", id: "web", img: "/template.jpg"
  },
  {
    label: "Branding and UI/UX Designs", description: "At Ominitech, we specialize in creating compelling brand identities and seamless UI/UX designs. Our team works closely with you to craft visually stunning and user-friendly experiences that leave a lasting impression. We're here to elevate your brand and engage your audience effectively.", id: "design", img: "/template.jpg"
  },
  {
    label: "Digital Marketing", description: "At Ominitech, we're experts in digital marketing. From SEO and PPC to social media and email campaigns, we use targeted strategies to boost your online visibility and drive results. Let us help you reach your audience and grow your business in the digital age.", id: "market", img: "/template.jpg"
  },
]

export const Services = () => {

  return (
    <div className="container mx-auto min-h-screen flex-col items-center flex gap-30 mt-5 px-3">
        <Typography
          className="text-4xl text-[#10c8ff] font-light lg:text-[54px]  mb-2 lg:mb-4"
        >
          Our Services
        </Typography>
        <Typography
          className="text-xl text-[#fff] font-light opacity-50 lg:text-2xl text-center mb-2 lg:mb-4"
        >
          Your All-in-one digital solution. Infinite Solution, One Omniverse
        </Typography>
        <Button
            variant="gradient"
            size="sm"
            style={{ background: "#10c8ff", color: "#000"}}
        >
            <span>View All</span>
        </Button>
        <div className="flex-col lg:flex lg:flex-row gap-[20px] w-full h-full py-5">
          {services.map((service, index) => {
            return (
            <Card className="w-full max-w-[26rem] shadow-lg bg-[#232323] mb-3 lg:mb-0" key={`service-box-${index}`}>
              <CardHeader floated={false} color="blue-gray">
                <img
                  src={service.img}
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography variant="h5" className="font-medium text-[#10c8ff]">
                    {service.label}
                  </Typography>
                </div>
                <Typography className="font-medium text-white">
                  {service.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-3">
                <Button
                  fullWidth={true}
                  variant="gradient"
                  size="lg"
                  style={{ background: "#10c8ff", color: "#000"}}
              >
                  <span>Get Started</span>
              </Button>
              </CardFooter>
            </Card>
            )
          })}
        </div>
    </div>
  );
};
