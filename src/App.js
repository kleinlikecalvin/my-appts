import React from "react";
import "./App.css";
import Head from "./components/Head";
import Nav from "./components/Nav";
import MyApptsBody from "./components/MyApptsBody";

export default function App() {
  return (
    <div className="App">
      <Head />
      <Nav />
      <MyApptsBody />
    </div>
  );
}
