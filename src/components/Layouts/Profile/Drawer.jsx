import {
    Drawer,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import { Links } from "./Links";

export const ProfileDrawer = ({ open, onClose }) => {

    return (
        <Drawer open={open} onClose={onClose} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              OMINITECH
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
            <Links />
        </Drawer>
    );
};
