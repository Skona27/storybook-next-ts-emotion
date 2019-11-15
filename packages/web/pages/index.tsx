import React from "react";
import Head from "next/head";
import { A, ThemeProvider } from "@sb-demo/ui";

const Home = () => (
  <ThemeProvider>
    <div css={{ border: "1px solid red" }}>
      <A>Siema</A>
    </div>
  </ThemeProvider>
);

export default Home;
