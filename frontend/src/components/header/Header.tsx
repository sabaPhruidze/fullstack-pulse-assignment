import { useState } from "react";
import { Menu } from "lucide-react";
import Search from "./Search";
import SUN from "../../assets/icons/sun.png";
import MOON from "../../assets/icons/moon.png";
import MobileSideBar from "./MobileSideBar";
import useThemeStore from "../../store/useThemeStore";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useThemeStore();

  const themeIcon = theme === "dark" ? MOON : SUN;
  const themeAlt = theme === "dark" ? "moon icon" : "sun icon";
  return (
    <>
      <div className="w-full h-16 flex  justify-between items-center px-4 border-2 md:border-l-0 border-slate-400 bg-white text-slate-900 dark:text-pulse-text dark:bg-pulse-surface2 dark:border-pulse-border ">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-slate-400 bg-white p-2 md:hidden text-slate-900 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-text"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <Search />
        <div className="flex gap-3 items-center">
          <p className="text-xl font-bold text-pulse-secondary">Pulse</p>
          <button
            type="button"
            aria-label="Theme"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-400 bg-white dark:border-pulse-border dark:bg-pulse-surface"
          >
            <img src={themeIcon} alt={themeAlt} className="w-5 h-5" />
          </button>
        </div>
      </div>
      <MobileSideBar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
