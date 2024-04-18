import { 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button, 
} from "@material-tailwind/react";
import { prices } from "./pricelist";

export const Pricing  = () => {
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

  return (
    <div className="container w-full mx-auto min-h-screen flex-col justify-center items-center gap-30 px-3">
        <Typography 
            className="text-2xl font-bold lg:text-[44px] text-[#10c8ff] mb-1 lg:mb-4"
        >
            Pricing
        </Typography>
        <Typography 
            className="text-xl font-bold lg:text-2xl text-white mb-1 lg:mb-4"
        >
            Discover Your Perfect Plan: Tailored Pricing Solutions for Every Business Need
        </Typography>

        <div className="mt-5 flex-col lg:flex lg:flex-row gap-5 w-full h-full py-5">
          {prices.map((price, index) => {
            return (
            <Card color="gray" variant="gradient" className="shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 w-full max-w-[24rem] p-8 mb-4" key={`price-card-${index}`}>
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
                  {price.label}
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
                  <span className="mt-2 text-4xl">$</span>{price.value}{" "}
                  <span className="self-end text-4xl">/mo</span>
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  {price.packages.map((item, index)  => {
                    return (
                    <li className="flex items-center gap-4" key={`packages-${index}`}>
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                      </span>
                      <Typography className="font-normal">{item}</Typography>
                    </li>
                    )
                  })}
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
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
            )
          })}
        </div>

        <div className="border border-b-2 border-gray-100 border-t-2 w-full h-[200px] p-10 flex flex-col items-center justify-center">
            <Typography 
              className="text-xl font-bold lg:text-2xl text-[#10c8ff] mb-1 lg:mb-4"
            >
              Not Sure what plan to take?
            </Typography>
            <Button
                variant="gradient"
                size="lg"
                style={{ background: "#10c8ff", color: "#000"}}
            >
                <span>Contact Us</span>
            </Button>
        </div>
    </div>
  );
};
