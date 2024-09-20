import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "@mantine/core";

export default function App() {
  return (
    <main>
      <Header />
      <Outlet />
      
    </main>
  );
}
