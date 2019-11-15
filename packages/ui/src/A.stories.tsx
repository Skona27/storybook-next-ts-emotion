import React from "react";
import { A } from "./A";
import { ThemeProvider } from "./theme";

export default { title: "UI|A" };

export const withText = () => (
  <ThemeProvider>
    <A>Hello A</A>
  </ThemeProvider>
);
