import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

import "./global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Routes />
    </MantineProvider>
  </React.StrictMode>
);
