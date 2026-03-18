import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const message =
    error instanceof Error ? error.message : "An unexpected error occured";
  return (
    <div className="flex-col h-screen flex items-center justify-center px-4 text-slate-900 dark:bg-pulse-bg dark:text-pulse-text">
      <div className="max-w-md w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-pulse-surface2">
        <div className="mb-4">
          <p className="text-sm font-semibold text-indigo-600 dark:text-pulse-secondary">
            Pulse
          </p>
          <h2 className="mt-1 text-2xl font-bold">Something went wrong</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-pulse-soft">
            {message}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={resetErrorBoundary}
            type="button"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-pulse-primary cursor-pointer"
          >
            Try again
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-pulse-border dark:text-pulse-text dark:bg-pulse-surface cursor-pointer"
          >
            Reload page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
