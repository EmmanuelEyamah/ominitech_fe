import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

export const Signup = () => {

  return (
    <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
            Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Username
                </Typography>
                <Input
                    size="lg"
                    placeholder="johndoe"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                </Typography>
                <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                </Typography>
                <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
            </div>
            <Checkbox
                label={
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                >
                    I agree the
                    <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                    >
                    &nbsp;Terms and Conditions
                    </a>
                </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
            />
            <NavLink
                to={"/auth/verifyemail"} 
            >
                <Button className="mt-6" fullWidth>
                        sign up
                </Button>
            </NavLink>
            <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <NavLink
                    to={"/auth/login"} 
                    className="font-medium text-gray-900"
                >
                    Log In
                </NavLink>
            </Typography>
        </form>
    </Card>
  );
};
