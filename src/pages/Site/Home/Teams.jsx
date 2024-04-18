import { FC } from "react";
import {   
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const teams  = [
  {
      name: "Eyamah Emmanuel",
      position: "Software Developer",
      image: "/assets/emma.png"
  },
  {
      name: "Matthias Bamidele",
      position: "UI/UX & Brand Designer",
      image: "/assets/ibee.png"
  },
  {
      name: "Adekunle Peter",
      position: "Data Analyst & Marketer",
      image: "/assets/ade.png"
  },
  {
      name: "Favour Bamidele",
      position: "Social Media Manager",
      image: "/assets/bams.png"
  },
]

export const Teams = () => {

  return (
    <div className="container mx-auto min-h-screen flex-col items-center flex gap-30 mt-10 lg:mt-[100px] px-1">
        <Typography
          className="text-4xl text-[#10c8ff] font-light lg:text-[54px]  mb-2 lg:mb-4"
        >
          Our Amazing Teams
        </Typography>
        <Typography
          className="text-xl text-[#fff] font-light opacity-50 lg:text-2xl text-center mb-2 lg:mb-4"
        >
          Empower your vision with our dedicated teams, where passion meets expertise, we're committed to bringing your ideas to life with boundless creativity and unwavering dedication.
        </Typography>

        <div className="flex-col lg:flex lg:flex-row gap-[20px] w-full h-full py-5">
          {teams.map((team, index) => {
            return (
              <Card className="w-86 shadow-lg bg-[#232323] mb-3 lg:mb-0" key={`profile-box-${index}`}>
                <CardHeader floated={false} className="h-70 bg-[#232323]">
                  <img src={team.image} alt="profile-picture" className="bg-transparent"/>
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" className="mb-2 text-white">
                    {team.name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium" textGradient>
                    {team.position}
                  </Typography>
                </CardBody>
              </Card>
            )
          })}
        </div>
    </div>
  );
};
