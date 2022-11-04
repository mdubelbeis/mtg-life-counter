import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const innerHeight = window.innerHeight;
  return (
    <div className={`h-full w-screen`}>
      <Outlet />
    </div>
  );
};

export default App;
