import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";

const DesktopSideBar = () => {
  return (
    <aside className="hidden md:flex md:w-60 md:flex-col md:border-r md:border-slate-200 md:bg-white dark:md:border-slate-800 dark:md:bg-slate-900">
      <div className="flex h-16 items-center border-b border-slate-200 px-4 dark:border-slate-800">
        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Pulse
        </p>
      </div>
      <nav className="flex flex-1 flex-col gap-2 p-3">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-white"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              }`
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
