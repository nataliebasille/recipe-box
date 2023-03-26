import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import classnames from "classnames";

type AppLinkProps = { activeClassName?: string; onClick?: () => void; children?: ReactNode };
export const asAppLink = ({ href, icon, label }: { href: string; icon?: ReactNode; label: string }) => {
  return ({ activeClassName, onClick }: AppLinkProps) => {
    const path = usePathname();
    return (
      <Link
        className={classnames("grid grid-cols-[24px_1fr]", path === href ? activeClassName : undefined)}
        href={href}
        onClick={onClick}
      >
        <span className="w-full">{icon}</span>
        {label}
      </Link>
    );
  };
};
