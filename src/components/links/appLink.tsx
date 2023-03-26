import Link from "next/link";
import { FC, ReactNode } from "react";

export const AppLink: FC<{ href: string; icon: ReactNode; children?: ReactNode }> = ({ href, icon, children }) => {
  return (
    <Link href={href} className="grid grid-cols-[24px_1fr]">
      <span className="w-full">{icon}</span>
      {children}
    </Link>
  );
};
