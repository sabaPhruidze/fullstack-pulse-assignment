import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallbackError from "./components/shared/FallbackError";
import Loading from "./components/shared/Loading";
import useThemeStore from "./store/useThemeStore";
import { Navigate } from "react-router-dom";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Assets = lazy(() => import("./pages/Assets"));
const News = lazy(() => import("./pages/News"));
const Alerts = lazy(() => import("./pages/Alerts"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
function App() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    //document.documentElement is <html>  and classList.toggle("dark", theme === "dark") means if it is dark add it or if it is not remove it
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  // f

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <ErrorBoundary FallbackComponent={FallbackError}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/news" element={<News />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
