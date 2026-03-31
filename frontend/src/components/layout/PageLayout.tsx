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
    <div className="min-h-screen bg-slate-50 dark:bg-pulse-bg">
      <div className="flex min-h-screen">
        <DesktopSideBar />
        <div className="min-w-0 flex-1">
          <Header />
          <main className="p-4 max-w-7xl mx-auto sm:p-5 md:p-6 lg:p-8 xl:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="mb-5 sm:mb-6">
                <h1 className="mb-2 text-2xl font-bold text-pulse-800 dark:text-pulse-text sm:text-3xl lg:text-4xl">
                  {title}
                </h1>
                <p className="m-4 text-sm font-semibold text-slate-500 dark:text-pulse-soft ">
                  {subtitle}
                </p>

                <div className="min-w-0">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
<Header />;
