import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const SectionCard = ({ title, children }: Props) => {
  return (
    <section className="my-5 rounded-lg border-2 border-slate-400 bg-white p-5 dark:border-pulse-border dark:bg-pulse-border/30">
      <div>
        <h2 className="font-bold text-slate-900 dark:text-pulse-text">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default SectionCard;
