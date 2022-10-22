import Playmat from "../../components/ui/Playmat";
import PlaymatHeader from "../../components/ui/PlaymatHeader";

const TwoPlayers: React.FC = () => {
  return (
    <div className="w-screen h-screen text-black">
      <div>
        <PlaymatHeader />
        <Playmat />
      </div>
      <div>
        <PlaymatHeader />
        <Playmat />
      </div>
    </div>
  );
};

export default TwoPlayers;
