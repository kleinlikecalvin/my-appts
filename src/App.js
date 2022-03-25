import React from "react";
import "./App.css";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Appointments from "./components/Appointments";

export default function App() {
  return (
    <div className="App">
      <Head />
      <Nav />
      <Appointments />
    </div>
  );
}
