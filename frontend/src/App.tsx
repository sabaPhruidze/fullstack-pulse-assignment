import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/shared/ErrorFallBack";
import Loading from "./components/shared/Loading";
import useThemeStore from "./store/useThemeStore";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Assets = lazy(() => import("./pages/Assets"));
const News = lazy(() => import("./pages/News"));
const Alerts = lazy(() => import("./pages/Alerts"));

function App() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    //document.documentElement is <html>  and classList.toggle("dark", theme === "dark") means if it is dark add it or if it is not remove it
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/news" element={<News />} />
              <Route path="/alerts" element={<Alerts />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
