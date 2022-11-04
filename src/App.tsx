import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const innerHeight = window.innerHeight;
  return (
    <div className={`min-h-screen min-w-screen`}>
      <Outlet />
    </div>
  );
};

export default App;
