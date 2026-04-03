import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const PortfolioSectionCard = ({ title, description, children }: Props) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default PortfolioSectionCard;
