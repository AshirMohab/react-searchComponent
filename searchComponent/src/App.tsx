import { useState } from "react";
import logo from "./logo.svg";
import { SearchComponent } from "./SearchComponent";
import "./tailwindcss.css";

function App() {
  return (
    <div
      id="HomePage"
      className="grid grid-rows-1 w-[100%] h-[100%] bg-slate-100 "
    >
      <div
        id="Header"
        className="my-6 flex flex-wrap items-center justify-center xl:justify-center"
      >
        <SearchComponent />
      </div>
    </div>
  );
}

export default App;
