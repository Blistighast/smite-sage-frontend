interface PlayerProps {
  Name: string | string[] | undefined;
}

const Player: React.FC<PlayerProps> = ({ Name }) => {
  return (
    <div>
      <div>
        <div>player</div>
      </div>
    </div>
  );
};

export default Player;
