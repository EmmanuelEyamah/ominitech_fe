import { FC } from "react";
import { Typography } from "@material-tailwind/react";
import { Teams } from "../../pages/Site/Home/Teams";

export const Banner = () => {

  return (
    <div className="min-h-full flex-col flex gap-30 px-5">
        <div className="flex flex-col lg:flex lg:flex-row py-0 lg:py-8">
            <div className="object-fit-center w-full lg:w-1/2 items-center gap-4 z-1000">
                <img src="/assets/logoA.png" alt="Image" className="w-full" />
            </div>
            <div className="flex-col w-full lg:w-1/2 items-center gap-4">
                <Typography 
                    className="text-4xl text-[#10c8ff] font-light lg:text-[54px]  mb-2 lg:mb-4"
                >
                    About Us
                </Typography>
                <Typography 
                    className="text-xl text-[#fff] font-light opacity-50 lg:text-2xl  mb-2 lg:mb-4"
                >
                    Infinite Solution, One Ominiverse
                </Typography>
                <Typography
                    variant="paragraph"
                    className="text-xl text-[#fff] font-light lg:text-2xl  mb-1 lg:mb-4"
                    >
                    At Ominitech, we are more than just a technology company – we are innovators, collaborators, and problem solvers dedicated to driving digital transformation and empowering businesses to thrive in the modern world.    
                </Typography>

                <Typography 
                    className="text-xl text-[#C6FF17] font-light lg:text-2xl  mb-2 lg:mb-4"
                >
                    Our Story
                </Typography>
                <Typography
                    variant="paragraph"
                    className="text-xl text-[#fff] font-extralight lg:text-2xl opacity-80 mb-1 lg:mb-4"
                    >
                    Established in 2023, Ominitech has its roots in a profound passion for harnessing the potential of technology to surmount real-world obstacles. Recognizing the seismic impact of digital solutions on businesses of all sizes, our founders embarked on a journey to empower enterprises in navigating the digital terrain with confidence and agility. Over time, driven by this unwavering vision, Ominitech has evolved into a holistic provider of comprehensive digital services, offering a spectrum of solutions tailored to meet the diverse needs of our clientele. From innovative startups to established corporations, we stand committed to equipping our clients with the cutting-edge tools, strategic insights, and transformative strategies essential for success in today's dynamic business landscape. At Ominitech, we view ourselves not just as service providers but as catalysts for digital transformation, guiding our clients toward a future brimming with boundless opportunities and growth.  
                </Typography>
            </div>
        </div>

        <div className="flex-col flex">
            <Typography 
                className="text-xl text-[#10c8ff] font-light lg:text-2xl  mb-2 lg:mb-4"
            >
                Our Mission
            </Typography>
            <Typography
                variant="paragraph"
                className="text-xl text-[#fff] font-extralight opacity-80 lg:text-2xl  mb-1 lg:mb-4"
                >
                At Ominitech, our mission is deeply rooted in addressing the challenges faced by startups and small-scale businesses. Recognizing the obstacles stemming from limited resources and organizational know-how, we strive to be the bridge that spans the gap between aspiration and achievement. Whether it's supporting existing businesses in their quest for growth or empowering aspiring entrepreneurs to navigate the complexities of startup ventures, we are committed to providing tailored solutions that unlock opportunities and drive sustainable success. With Ominitech by their side, businesses can embark on their journey with confidence, knowing they have a dedicated partner invested in their growth and success. 
            </Typography>
        </div>

        <div className="flex-col flex">
            <Typography 
                className="text-xl text-[#10c8ff] font-light lg:text-2xl  mb-2 lg:mb-4"
            >
                Our Value
            </Typography>
            <Typography
                variant="paragraph"
                className="text-xl text-[#fff] font-extralight opacity-80 lg:text-2xl  mb-1 lg:mb-4"
                >
                    At Ominitech, our values serve as the bedrock upon which our entire organization is built. Integrity, innovation, collaboration, and customer-centricity are not merely concepts; they are ingrained into the very fabric of our culture, guiding every aspect of our operations. We believe in conducting ourselves with the utmost integrity, adhering unwaveringly to ethical standards and principles in every interaction. Innovation is at the core of our ethos, driving us to push the boundaries of what's possible and continuously strive for improvement and advancement. Collaboration is not just encouraged; it's essential, as we recognize the collective strength and ingenuity that arises when diverse talents come together towards a common goal. And perhaps most importantly, customer-centricity is not just a philosophy; it's a way of life. We are deeply committed to understanding and fulfilling the needs of our clients, placing their satisfaction and success at the forefront of everything we do. At Ominitech, these values aren't just ideals to aspire to; they are the guiding principles that shape our identity, inform our decisions, and inspire us to achieve greatness every day 
            </Typography>
        </div>
        <Teams />
    </div>
  );
};
