import "./App.css";
import React from "react";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
//import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className=" parent">
      <center>
        <div>
          <WatchedList />
        </div>
        <div>
          <WatchList />
        </div>
      </center>
    </div>
  );
}

export default App;
