import Image from "next/image";

const GodCard = ({ god }) => {
  return (
    <div className="card">
      {god.Name} {god.Pantheon}
      <Image
        src={god.godCard_URL}
        alt={`picture of god ${god.Name}`}
        width={240}
        height={400}
      />
    </div>
  );
};

export default GodCard;
