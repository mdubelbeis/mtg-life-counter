interface PlaymatProps {
  player: string;
}

const Playmat: React.FC<PlaymatProps> = ({ player }) => {
  return (
    <div>
      <LifeCounter />
    </div>
  );
};

export default Playmat;
