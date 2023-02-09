import Image from "next/image";

interface GodInfoProps {}

const GodCardSubInfo: React.FC<GodInfoProps> = ({ god }) => {
  return (
    <div>
      <span className="pantheon">
        <p>{god.Pantheon}</p>
        <Image
          src={`/pantheon_icons/${god.Pantheon}.webp`}
          alt="Pantheon Icon"
          width={30}
          height={30}
        />
      </span>
      <span className="roles">
        <p>{god.Roles}</p>
        <Image
          src={`/class-icons/${god.Roles}.webp`}
          alt="Role Icon"
          width={30}
          height={30}
        />
      </span>
    </div>
  );
};

export default GodCardSubInfo;
