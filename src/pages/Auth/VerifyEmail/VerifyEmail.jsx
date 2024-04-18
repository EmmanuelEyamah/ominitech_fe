import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

export const VerifyEmail = () => {

  return (
    <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
            Verify Email 
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            Check your email inbox for your verification pin.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Enter your 6-digit Auth Pin
                </Typography>
                <Input
                    size="lg"
                    placeholder="123456"
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
                    Verify Email
                </Button>
            </NavLink>
            <Typography color="gray" className="mt-4 text-center font-normal">
                Did'nt receive an email?{" "}
                <NavLink
                    to={"/auth/resendOtp"} 
                    className="font-medium text-gray-900"
                >
                    Resend
                </NavLink>
            </Typography>
        </form>
    </Card>
  );
};
