import "@testing-library/jest-dom/vitest";
// Here I will add ResizeObserver for NewsCategoryFilter
import { vi } from "vitest"; //for vi.stubGlobal

class ResizeObserverMock {
  //jsdom
  observe() {} // Headless UI ამ მეთოდს ეძახებს, ამიტომ ცარიელი stub გვჭირდება
  unobserve() {} //დაკვირვების შეწყვეტის მეთოდი
  disconnect() {} //observer-ის სრულად გასათიშად
}

vi.stubGlobal("ResizeObserver", ResizeObserverMock); //ტესტ გარემოში ვამატებთ იმ API-ს, რომელიც jsdom-ს აკლია
