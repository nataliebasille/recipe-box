import { SettingsIcon } from "~/icons/settingsIcon";
import { asAppLink } from "./appLink";
import { FC } from "react";

export const SettingsLink = asAppLink({
  href: "/settings",
  icon: <SettingsIcon />,
  label: "Settings",
});
