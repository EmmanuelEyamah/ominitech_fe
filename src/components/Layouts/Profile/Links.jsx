import { FC, useState } from "react";
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Alert,
  } from "@material-tailwind/react";

  import {
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import {
    CubeTransparentIcon,
  } from "@heroicons/react/24/outline";
  
export const Links = () => {
    const [openAlert, setOpenAlert] = useState(true);

  return (
    <>
        <List>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className="mb-[40px]">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
          <hr className=""/>
          <ListItem>
            <ListItemPrefix>
            </ListItemPrefix>
            Become a Seller
          </ListItem>
          <hr className=""/>
        </List>
        <Alert open={openAlert} className="mt-[200px]" onClose={() => setOpenAlert(false)}>
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
                Upgrade to PRO
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
                Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                and premium.
            </Typography>
            <div className="mt-4 flex gap-3">
                <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
                >
                Dismiss
                </Typography>
                <Typography as="a" href="#" variant="small" className="font-medium">
                Upgrade Now
                </Typography>
            </div>
        </Alert>
    </>
  );
};
