import { 
  Typography,
  Carousel,
  Card,
  CardHeader,
  CardFooter,
  Button,
  CardBody,
  IconButton,
  Tooltip,
  Textarea,
  Rating,
  Avatar 
} from "@material-tailwind/react";
import { useState } from "react";

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

export const Hub = () => {
  const [rated, setRated] = useState(3)

  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <div className="items-start min-h-screen flex-col lg:flex lg:flex-row text-3xl flex gap-[25px] px-5">
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <Carousel
            autoplay={true}
            loop={true}
          >
            <img  src="/template.jpg" alt="team projects" className="h-100 w-full object-cover object-center"/>
            <img  src="/template.jpg" alt="team projects" className="h-100 w-full object-cover object-center"/>
            <img  src="/template.jpg" alt="team projects" className="h-100 w-full object-cover object-center"/>
          </Carousel>

          <Typography 
            className="font-light text-white  text-2xl lg:text-4xl"
          >
              Team Name
          </Typography>
          <Typography 
            className="font-light text-white  text-xl lg:text-2xl"
          >
              Every industry has its unique challenges and requirements, and generic website templates often fall short in meeting these specialized needs. That's where Ominitech comes in. Our team of expert developers excels in creating tailored websites that address the specific demands of your business or organization. Whether you need intricate data management systems, interactive customer engagement tools, or seamless integration with third-party applications, we'll work closely with you to understand your objectives and deliver a bespoke solution that exceeds your expectations.
          </Typography>
        <div className="flex-col lg:flex lg:flex-row gap-[20px] w-full h-full py-5">
          {teams.map((team, index) => {
              return (
                <Card className="w-46 shadow-lg bg-[#232323] mb-3 lg:mb-0" key={`profile-box-${index}`}>
                  <CardHeader floated={false} className="h-70 bg-[#232323]">
                    <img src={team.image} alt="profile-picture" className="bg-transparent"/>
                    <Tooltip content="Team Lead">
                      <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-2 right-2 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                      </IconButton>
                    </Tooltip>
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography className="mb-2 text-white text-xl">
                      {team.name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium text-base" textGradient>
                      {team.position}
                    </Typography>
                  </CardBody>
                </Card>
              )
            })}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex-col items-center flex gap-5">
        <Typography 
            className="font-light text-[#10c8ff]  text-2xl lg:text-4xl"
          >
              Team Pricing
          </Typography>
          <Typography 
            className="font-light text-white opacity-50  text-xl lg:text-2xl"
          >
              Always contact team lead before placing an ORDER!
          </Typography>
        <div className="flex flex-col lg:flex lg:flex-row md:flex md:flex-row gap-2">
          <Card variant="gradient" className="w-full max-w-[20rem] mb-3 p-8 bg-transparent border border-gray-600">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                basic
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                Starting from
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">$</span>29{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">5 team members</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">200+ components</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">40+ built-in pages</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">1 year free updates</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">
                    Life time technical support
                  </Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Order now
              </Button>
            </CardFooter>
          </Card>
          <Card variant="gradient" className="w-full max-w-[20rem] mb-3 p-8 bg-transparent border border-gray-600">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                standard
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                Starting from
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">$</span>120{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">5 team members</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">200+ components</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">40+ built-in pages</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">1 year free updates</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">
                    Life time technical support
                  </Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Order now
              </Button>
            </CardFooter>
          </Card>
          <Card variant="gradient" className="w-full max-w-[20rem] mb-3 p-8 bg-transparent border border-gray-600">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                Premium
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                Starting from
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">$</span>185{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">5 team members</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">200+ components</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">40+ built-in pages</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">1 year free updates</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full text-white border border-white bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal text-white">
                    Life time technical support
                  </Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Order now
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#C6FF17] text-[#000]"
            ripple={false}
            fullWidth={true}
          >
            Chat Us
          </Button>
        </div>

        <div className="mt-[80px]">
          <Carousel
            autoplay={true}
            loop={true}
            prevArrow={false}
            nextArrow={false}
            className=" w-full lg:w-[500px]"
          >
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" className="text-white">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="text-white opacity-50">Nigeria</Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative Tim. I use
                  them as a freelancer in my hobby projects for fun! And its really
                  affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" className="text-white">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography className="text-white opacity-50">Nigeria</Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative Tim. I use
                  them as a freelancer in my hobby projects for fun! And its really
                  affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
        </Carousel>
        </div>

        <div className="flex flex-col items-start mt-5">
          <Typography
            color="white"
            className="font-normal uppercase text-2xl"
          >
            Leave a review
          </Typography>
          <div className="relative w-[22rem] lg:w-[40rem]">
            <div className="flex items-center gap-2 font-light text-blue-gray-500">
              <Rating value={3} onChange={(value) => setRated(value)} />
              <Typography color="blue-gray" className="font-medium items-center text-blue-gray-500">
                Ratings
              </Typography>
            </div>
            <Textarea variant="static" placeholder="Your Comment" rows={8} className="px-3 border border-gray-900"/>
            <div className="flex w-full justify-end py-1.5">
                <Button size="md" className="rounded-md bg-[#10c8ff] text-white">
                  Post Review
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
