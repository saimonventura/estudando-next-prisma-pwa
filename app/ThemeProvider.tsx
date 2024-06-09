"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import getLPTheme from "./getLPTheme";

export function ThemeProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme(getLPTheme("dark"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
