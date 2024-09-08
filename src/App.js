// App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";

const App = () => {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar
        isExpanded={isSideBarExpanded}
        toggleSideBar={() => setIsSideBarExpanded(!isSideBarExpanded)}
      />
      <div className="flex flex-col flex-1">
        <TopBar />
        <MainContent isSidebarExpanded={isSideBarExpanded} />
      </div>
    </div>
  );
};

export default App;
