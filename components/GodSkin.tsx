import Image from "next/image";

interface SkinProps {
  skin: {
    skin_id1: number;
    skin_name: string;
    god_name: string;
    godSkin_URL: string;
    godIcon_URL: string;
    obtainability: string;
    price_favor: number;
    price_gems: number;
  };
}

const GodSkin: React.FC<SkinProps> = ({ skin }) => {
  return (
    <div>
      <h4>{skin.skin_name}</h4>
      <p>{skin.obtainability}</p>
      <Image
        src={skin.godSkin_URL}
        alt={skin.skin_name}
        width={200}
        height={200}
      />
      <p>Favor: {skin.price_favor}</p>
      <p>Gems: {skin.price_gems}</p>
    </div>
  );
};

export default GodSkin;
