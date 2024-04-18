import { FC } from "react";
import {
    Card
  } from "@material-tailwind/react";
import { Links } from "./Links";

export const Sidebar = () => {
   
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        {/* <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div> */}
        <Links />
      </Card>
    );
  
};
