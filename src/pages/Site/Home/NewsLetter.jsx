import { FC, useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";

export const Newsletter = ({ label, button }) => {
    const [email, setEmail] = useState("");
    const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="border border-b-2 border-gray-100 border-t-2 w-full h-[200px] p-10 flex flex-col">
        <Typography 
            className="text-2xl font-bold lg:text-[44px] text-white mb-1 lg:mb-4"
        >
            
            {label}
        </Typography>

        <div className="relative flex w-full max-w-[54rem]">
            <Input
                type="email"
                label="Email Address"
                placeholder="Email Address"
                value={email}
                size="lg"
                onChange={onChange}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                containerProps={{
                    className: "min-w-0",
                }}
                labelProps={{
                    className: "hidden",
                }}
            />
            <Button
                size="md"
                disabled={!email}
                className={`!absolute right-0.5 top-0.5 rounded text-white ${email ? "bg-[#10c8ff]" : "bg-[#10c8ff] opacity-50"}`}
            >
                {button}
            </Button>
        </div>
    </div>
  );
};
