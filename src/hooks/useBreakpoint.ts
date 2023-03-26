import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.cjs";
import { useEffect, useState } from "react";

type BreakpointKey = "sm" | "md" | "lg" | "xl" | "2xl";
const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = Object.keys(fullConfig.theme?.screens ?? {}).reduce((map, key) => {
  map.set(key as BreakpointKey, {
    minWidth: parseInt((fullConfig.theme?.screens as any)[key]),
  });
  return map;
}, new Map<BreakpointKey, { minWidth: number }>());

export const useBreakpoint = (atLeastSize: BreakpointKey) => {
  const [breakpoint, setBreakpoint] = useState(() => isAtleastBreakpoint(atLeastSize));

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(isAtleastBreakpoint(atLeastSize));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return breakpoint;
};

export const isAtleastBreakpoint = (breakpoint: BreakpointKey) => {
  const { minWidth = Infinity } = breakpoints.get(breakpoint) ?? {};

  return window.innerWidth >= minWidth;
};
