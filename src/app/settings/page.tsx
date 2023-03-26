import { ThemeSelector } from "~/components/settings/themeSelector";

export const metadata = {
  title: "My settings - Recipe Box",
};

export default function SettingsPage() {
  return (
    <>
      <h2 className="mb-4 text-xl">Themes</h2>
      <ThemeSelector />
    </>
  );
}
