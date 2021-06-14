import "./App.css";
import React from "react";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
//import "tailwindcss/tailwind.css";

function App() {
  return (
    <div>
      <center>
        <div style={{ backgroundColor: "cyan" }}>
          <WatchedList />
        </div>
        <div style={{ backgroundColor: "greenyellow" }}>
          <WatchList />
        </div>
      </center>
    </div>
  );
}

export default App;
