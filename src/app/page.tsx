import { FC, ReactNode } from "react";
import { ALL_CUISINES } from "~/models/cuisines";
import { ALL_FOOD } from "~/models/food";
import classnames from "classnames";

const Section: FC<{ className?: string; heading: ReactNode; items: typeof ALL_FOOD | typeof ALL_CUISINES }> = ({
  className,
  heading,
  items,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className={classnames(
          "text-center text-2xl font-bold tracking-tight text-secondary underline sm:text-left sm:text-4xl",
          className
        )}
      >
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-6">
        {Object.entries(items).map(([key, { label }]) => (
          <button key={key} className="btn-accent btn-outline btn">
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex w-full flex-col gap-2 sm:gap-4">
      <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">Pick one to explore recipes!</h1>
      <div className="divider" />
      <Section className="mt-2 sm:mt-4" heading="Cuisines" items={ALL_CUISINES} />
      <div className="divider">OR</div>
      <Section heading="Food" items={ALL_FOOD} />
    </div>
  );
}
