"use client";

import { ThemeProvider, useTheme } from "~/stores/themeStore";
import "../styles/globals.css";
import { FC, ReactNode, useCallback, useRef } from "react";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import { MenuIcon } from "~/icons/menuIcon";
import { SettingsLink } from "~/components/links/settingsLink";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const sidebarToggleRef = useRef<HTMLInputElement>(null);

  const toggleSidebar = useCallback(() => {
    sidebarToggleRef.current?.click();
  }, []);

  return (
    <html data-theme={theme}>
      <head>
        <title>Recipe Box</title>
      </head>
      <body>
        <div className="drawer">
          <input ref={sidebarToggleRef} id="sidebar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="navbar w-full bg-primary text-primary-content">
              <div className="flex-none lg:hidden">
                <label htmlFor="sidebar" className="btn-ghost btn-square btn">
                  <MenuIcon />
                </label>
              </div>
              <div className="mx-2 flex-1 px-2">Recipe Box</div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  <li>
                    <SettingsLink />
                  </li>
                </ul>
              </div>
            </div>
            <main className="w-100 p-5 sm:p-16">{children}</main>
          </div>
          <div className="drawer-side">
            <label htmlFor="sidebar" className="drawer-overlay"></label>
            <ul className="menu w-80 bg-base-100 p-4">
              <li>
                <SettingsLink onClick={toggleSidebar} />
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}
