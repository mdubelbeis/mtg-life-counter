interface PlaySideProps {
  children: React.ReactNode;
}

const PlaySide: React.FC<PlaySideProps> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};

export default PlaySide;
