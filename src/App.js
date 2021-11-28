import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="cointainer">
        <Sidebar />
        other pages
      </div>

    </>
  );
}

export default App;
