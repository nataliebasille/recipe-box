import { SettingsIcon } from "~/icons/settingsIcon";
import { AppLink } from "./appLink";
import { FC } from "react";

type SettingsLinkProps = {
  onClick?: () => void;
};
export const SettingsLink: FC<SettingsLinkProps> = ({ onClick }) => {
  return (
    <AppLink href="/settings" icon={<SettingsIcon />} onClick={onClick}>
      Settings
    </AppLink>
  );
};
