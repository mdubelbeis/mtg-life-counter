import { Outlet } from "react-router-dom";

import Header from "./components/Header";

function App() {
  const innerHeight = window.innerHeight;
  return (
    <div className="h-[innerHeight + 'px']">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
}

export default App;
