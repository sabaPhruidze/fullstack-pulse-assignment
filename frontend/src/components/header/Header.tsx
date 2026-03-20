import { useState } from "react";
import { Menu } from "lucide-react";
import Search from "./Search";
import SUN from "../../assets/icons/sun.png";
import MOON from "../../assets/icons/moon.png";
import SideDrawer from "./SideDrawer";
import useThemeStore from "../../store/useThemeStore";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useThemeStore();

  const themeIcon = theme === "dark" ? MOON : SUN;
  const themeAlt = theme === "dark" ? "moon icon" : "sun icon";
  return (
    <>
      <div className="w-full h-16 text-pulse-text bg-pulse-surface2 border-2 border-pulse-border flex  justify-between items-center px-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-slate-300 bg-white p-2 md:hidden dark:border-slate-600 dark:bg-slate-800"
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
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800"
          >
            <img src={themeIcon} alt={themeAlt} className="w-5 h-5" />
          </button>
        </div>
      </div>
      <SideDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
