import { CssBaseline, ThemeProvider } from "@mui/material";
import "../public/css.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
