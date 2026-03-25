import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";

const DesktopSideBar = () => {
  return (
    <aside className="hidden md:flex md:w-60 md:flex-col md:border-r md:border-slate-300 md:bg-white dark:md:border-pulse-border dark:md:bg-pulse-surface2">
      <div className="flex h-16 items-center border-b border-slate-300 px-4 dark:border-pulse-border">
        <p className="text-xl font-bold text-pulse-secondary">Pulse</p>
      </div>
      <nav className="flex flex-1 flex-col gap-2 p-3">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `link-base ${isActive ? "link-active" : "link-iddle"}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DesktopSideBar;
