import { useState } from "react";

interface PlayerProps {
  Name: string | string[] | undefined;
}

const Player: React.FC<PlayerProps> = ({ Name }) => {
  const [player, setPlayer] = useState({});

  return (
    <div>
      <div>
        <div>player</div>
      </div>
    </div>
  );
};

export default Player;
