import Link from "next/link";
import { FC, ReactNode } from "react";

export const AppLink: FC<{ href: string; icon: ReactNode; onClick?: () => void; children?: ReactNode }> = ({
  href,
  icon,
  onClick,
  children,
}) => {
  return (
    <Link href={href} onClick={onClick} className="grid grid-cols-[24px_1fr]">
      <span className="w-full">{icon}</span>
      {children}
    </Link>
  );
};
