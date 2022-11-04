import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const innerHeight = window.innerHeight;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
