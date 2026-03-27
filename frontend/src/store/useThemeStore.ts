import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const savedTheme = window.localStorage.getItem("pulse-theme");
  return savedTheme === "dark" ? "dark" : "light";
};
const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      // state theme is the previouse theme , it just is written like this
      const nextTheme = state.theme === "dark" ? "light" : "dark"; //new value
      window.localStorage.setItem("pulse-theme", nextTheme);
      return { theme: nextTheme }; // updates state
    }),
  setTheme: (theme) => {
    window.localStorage.setItem("pulse-theme", theme);
    set({ theme });
  },
}));
export default useThemeStore;
