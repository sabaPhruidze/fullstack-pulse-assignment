import React from "react";
import Header from "../header/Header";
import DesktopSideBar from "./DesktopSideBar";
type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};
function PageLayout({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-pulse-bg dark:bg-slate-950">
      <div className="flex min-h-screen">
        <DesktopSideBar />
        <div className="flex-1">
          <Header />
          <main className="p-4 sm:p-5 md:p-6">
            <h1 className="mb-2 text-2xl font-bold text-pulse-text dark:text-slate-100 sm:text-3xl">
              {title}
            </h1>
            <p className="mn-4 text-sm font-semibold text-pulse-soft dark:text-slate-400">
              {subtitle}
            </p>

            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
<Header />;
