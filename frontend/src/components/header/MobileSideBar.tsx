import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";
type Props = {
  open: boolean;
  onClose: () => void;
};

const MobileSideBar = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="fixed left-0 top-0 z-50 h-screen w-[260px] border-r border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-900"
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ type: "tween", duration: 0.3 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="h-14 px-4 flex items-center justify-between border-b border-pulse-border">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-pulse-secondary text-2xl">
                Pulse
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-9 h-9 rounded-lg border border-pulse-border bg-pulse-surface text-pulse-text flex items-center justify-center hover:scale-90 duration-300"
            >
              ✕
            </button>
          </div>
          <nav className="p-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `link-base ${isActive ? "link-active" : "link-iddle"}`
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileSideBar;
