import React from "react";

const HomePage: React.FC = () => {
  // * SELECTION FOR EITHER COMMANDER OR STANDARD
  return (
    <div>
      CHOOSE YOUR OPTION{" "}
      <ul>
        <li>Commander</li>
        <li>Standard</li>
      </ul>
    </div>
  );
};

export default HomePage;