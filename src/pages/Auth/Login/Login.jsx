import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

export const Login = () => {

  return (
    <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
            Login 
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            Welcome Back! Enter your details to login.
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
            <NavLink
                to={"/profile/dashboard"} 
            >
                 <Button className="mt-6" fullWidth>
                    Login
                </Button>
            </NavLink>
        <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <NavLink
                to={"/auth/signup"} 
                className="font-medium text-gray-900"
            >
                Sign Up
            </NavLink>
        </Typography>
        </form>
    </Card>
  );
};
