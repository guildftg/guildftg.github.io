import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const STORAGE_KEY = "ftg-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "system";
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";
  } catch (error) {
    return "system";
  }
}

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const activeTheme = theme === "system" ? systemTheme : theme;
  const isDark = activeTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  useEffect(() => {
    const root = document.documentElement;
    try {
      if (theme === "system") {
        root.removeAttribute("data-bs-theme");
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        root.setAttribute("data-bs-theme", theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
      }
    } catch (error) {
      root.removeAttribute("data-bs-theme");
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => setSystemTheme(mediaQuery.matches ? "dark" : "light");

    syncSystemTheme();
    mediaQuery.addEventListener("change", syncSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncSystemTheme);
  }, []);

  return (
    <Button
      type="button"
      variant="outline-secondary"
      className="theme-toggle"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
      title={`Switch to ${nextTheme} mode`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4a2 2 0 0 1 2-2h1.5a3.5 3.5 0 0 0 3.5-3.5C20 6.4 16.4 2 12 2Z" />
        <circle cx="7" cy="12" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="9.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="17" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    </Button>
  );
}
