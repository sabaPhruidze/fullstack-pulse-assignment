I am glad that I had the opportunity to finish this project. It took a lot of time but it wwas worth it.Hope you enjoy and use it well

# Pulse Market Monitoring Dashboard

Pulse is a responsive full stack market monitoring dashboard built to explore and track market data across multiple sections, including Dashboard, Assets, News, Alerts, and Portfolio. The project combines a React and TypeScript frontend with an Express backend that serves mock market data through REST API endpoints.

The frontend was built step by step with a strong focus on clean structure, scalability, maintainable component architecture, and a user friendly interface across both light and dark themes. The application is designed to make financial and market information easier to scan, filter, and understand through reusable UI sections, route based code splitting, and data driven visualizations.

## Project Overview

The application is structured as a dashboard experience where each page focuses on a different part of market monitoring:

- **Dashboard** provides a high level summary of important market information
- **Assets** allows users to explore market assets with search and filtering
- **News** displays market related news with category based filtering
- **Alerts** surfaces alert data grouped by severity and importance
- **Portfolio** presents portfolio level insights, performance data, holdings, and charts

The backend is built with Express and exposes REST endpoints for portfolio data, assets, alerts, news, dashboard summaries, influencers, events, and insights. This makes the frontend feel close to a real product workflow while still keeping the project self contained and easy to run locally.

## Frontend Architecture

The frontend is built with **React**, **TypeScript**, and **Vite**, using a component based architecture that keeps UI pieces small, reusable, and easier to maintain as the app grows.

Some of the main architectural decisions include:

- **TanStack Query** for API caching and async state management
- **Axios** for HTTP requests to the backend
- **Custom hooks** to isolate data fetching logic and keep page components cleaner
- **React Router** for client side routing between dashboard sections
- **React.lazy() + Suspense** for route level code splitting and improved loading behavior
- **Zustand** for lightweight global theme state management
- **Tailwind CSS** for styling, spacing, dark mode, and responsive layouts
- **Error Boundary** for safer UI recovery when runtime errors occur

This setup makes the project easier to scale, because the responsibilities are clearly separated between pages, reusable UI components, hooks, utility functions, and API layer files.

## Key Frontend Features

### Clean and scalable component structure

The project uses reusable layout and card components to keep the interface visually consistent across pages. Shared UI patterns such as section cards, loading states, error handling, filters, and list items are separated into dedicated components instead of being repeated inside pages.

### Data fetching and caching

TanStack Query is used to manage asynchronous requests, loading states, caching, and error states. Query logic is extracted into custom hooks such as portfolio, news, alerts, and asset hooks, which helps keep page level components focused on rendering rather than request management.

### Responsive design

The interface is built with a mobile first approach and adapted across **sm**, **md**, **lg**, and **xl** breakpoints. Layout spacing, grid structure, chart containers, and content sections are designed to remain readable and usable across screen sizes.

### Dark mode support

Theme management is handled with Zustand and synced with `localStorage`. The selected theme is applied to `document.documentElement`, allowing Tailwind's dark mode classes to work consistently across the entire application.

### Route level code splitting

Pages such as Dashboard, Assets, News, Alerts, and Portfolio are lazy loaded with React.lazy and Suspense. This keeps the initial bundle lighter and improves the perceived loading experience.

### Safer UI recovery

An Error Boundary is included at app level so unexpected UI failures can be caught without crashing the full application.

## Portfolio Page

The Portfolio page is one of the most data focused sections in the project and was built to present financial information in a structured and readable way.

It includes:

- summary cards for total value, total change, best performer, and worst performer
- an asset allocation visualization
- an asset performance comparison chart
- a holdings table
- watchlist and influencer related sections

### Why different data presentation formats were used

The Portfolio page uses different presentation methods depending on the kind of information being shown:

- A **Table** is used to display holdings because tabular data is the clearest way to present exact values such as quantity, average buy price, current price, current value, and percentage change
- A **Pie Chart** is used to visualize portfolio allocation because it makes it easier to understand how the total portfolio is distributed across assets
- A **BarChart** is used to compare asset performance because it is more effective for comparing percentage changes side by side
- **Intl.NumberFormat** is used to format currency values so numbers appear cleaner, more readable, and more professional in the UI

This combination helps balance precision and readability. The table is useful for detailed inspection, while charts help communicate trends and distribution faster at a glance.

### Portfolio components

The Portfolio section is split into reusable pieces, including:

- performance summary cards
- allocation chart section
- asset change chart section
- holdings table section
- watchlist section
- influencers section

This keeps the page modular and makes it easier to extend later.

## News Page

The News page focuses on category based filtering and readable market updates.

It includes:

- category filtering
- filtered list rendering
- loading and error states
- reusable news item and list components
- cleaner interactive filtering with Headless UI

The filtering flow is designed so that the page remains simple while still demonstrating state driven rendering and UI logic clearly.

## Assets Page

The Assets page supports exploration of market assets and includes:

- search functionality
- debounced search input for better UX and fewer unnecessary updates
- modal based detail display
- portal rendering for modal content
- controlled event propagation with `e.stopPropagation()` inside interactive modal behavior

This makes the Assets page a good example of combining filtering, interaction design, and reusable UI structure.

## Alerts Page

The Alerts page is designed to organize and surface alert data more clearly by severity and type. It uses grouped UI sections and utility helpers to make alert information easier to scan and reason about.

## Backend

The backend is built with **Node.js** and **Express** and serves mock data through REST endpoints. It includes:

- route based API organization
- controllers and services
- middleware for async handling and error handling
- validation middleware
- health check endpoint
- mock market related data for frontend integration

Available API areas include:

- assets
- news
- alerts
- dashboard
- portfolio
- influencers
- events
- insights

This backend structure supports the frontend with a realistic integration flow while staying simple enough for an assignment project.

## Testing

The project also includes frontend testing with:

- **Vitest**
- **React Testing Library**
- **userEvent**

Testing was added for important UI logic and component behavior, especially around the News feature.

Covered test cases include:

- category selection behavior in the News filter
- filtered rendering flow for news items
- item rendering in list cards
- loading state handling
- error state handling
- utility logic such as sorting behavior

These tests help improve confidence in the UI, reduce regressions, and make interactive features easier to verify during development.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- TanStack Query
- Axios
- Zustand
- Recharts
- Headless UI
- Framer Motion
- React Error Boundary
- Lucide React
- React Icons

### Testing

- Vitest
- React Testing Library
- userEvent
- jsdom

### Backend

- Node.js
- Express
- CORS
- dotenv

## Running the Project Locally

### 1. Start the backend

cd backend
npm install
npm run dev
