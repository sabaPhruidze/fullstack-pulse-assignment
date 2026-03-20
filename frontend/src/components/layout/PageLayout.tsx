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
    <div className="bg-pulse-bg min-h-screen">
      <Header />
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-2 text-pulse-text">{title}</h1>
        <p className="text-sm text-pulse-soft font-semibold">{subtitle}</p>
        <DesktopSideBar />
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
