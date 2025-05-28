// app/_layout.tsx or app/layout.tsx
import { Slot } from "expo-router";
import { ThemeProvider } from "./context/ThemeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
