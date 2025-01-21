import { Stack } from "@mui/joy";
import { ReactNode } from "react";
import { Navbar } from "../navigation/navbar";
import { Sidebar } from "../navigation/sidebar";

type LayoutProps = {
  children: ReactNode;
  hasSideBar?: boolean;
};

export const Layout = ({ children, hasSideBar }: LayoutProps) => {
  if (hasSideBar) {
    return (
      <Stack sx={{ flexDirection: "row" }}>
        <Sidebar />
        <Stack sx={{ flex: 1 }}>
          <Navbar hasSubvisualIcon />
          {children}
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack>
      <Navbar hasSubvisualIcon />
      {children}
    </Stack>
  );
};
