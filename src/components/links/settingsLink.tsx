import { SettingsIcon } from "~/icons/settingsIcon";
import { AppLink } from "./appLink";

export const SettingsLink = () => {
  return (
    <AppLink href="/settings" icon={<SettingsIcon />}>
      Settings
    </AppLink>
  );
};
