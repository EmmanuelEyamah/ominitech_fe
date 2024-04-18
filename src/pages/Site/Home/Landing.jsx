import { FC } from "react";
import { Typography, Button } from "@material-tailwind/react";

export const Landing = () => {

  return (
    <div className="container mx-auto min-h-screen flex-col items-start lg:items-center lg:flex lg:flex-row gap-30 px-3">
        <div className=" flex-col w-full lg:w-1/2 items-center gap-4">
            <Typography 
                color="white"
                className="text-4xl font-bold lg:text-[64px]  mb-1 lg:mb-4"
            >
                Infinite Solution
            </Typography>
            <Typography 
                className="text-4xl font-bold lg:text-[64px] text-[#10c8ff] mb-1 lg:mb-4"
            >
                One Ominiverse
            </Typography>
            <Typography 
                variant="paragraph"
                className="text-white text-[16px] lg:text-xl mb-4"
            >
                Transforming ideas into innovations: where code meets creativity and data sparks insights -your all-in-one platform for seamless collaboration and groundbreaking solutions.
            </Typography>
            <Button
                variant="gradient"
                size="sm"
                style={{ background: "#C6FF17", color: "#000"}}
            >
                <span>Get Started</span>
            </Button>
        </div>
        <div className="flex-col object-fit-center w-full lg:w-1/2 items-center gap-4 z-1000">
            <img src="/assets/homepage.png" alt="Image" className="w-full" />
        </div>
    </div>
  );
};
