// import "./App.css";
import React from "react";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
//import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className=" parent">
      <center>
        <div>
          <WatchList />
        </div>
        <div>
          <WatchedList />
        </div>
      </center>
    </div>
  );
}

export default App;
