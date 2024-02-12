import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContextFile";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    const htmlTag = document.documentElement;
    if (state.theme === "dark") {
      htmlTag.classList.add("dark");
    } else {
      htmlTag.classList.remove("dark");
    }
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
