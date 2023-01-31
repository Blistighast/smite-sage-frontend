import { useEffect, useState } from "react";
import GodCard from "./../components/GodCard";

const serverUrl = "http://localhost:4000";

const Gods = () => {
  const [gods, setGods] = useState(null);

  const getGods = async () => {
    const resp = await fetch(`${serverUrl}/getgods`);
    const data = await resp.json();
    console.log(gods);
    setGods(data);
  };

  useEffect(() => {
    getGods();
  }, []);

  return (
    <div>
      {gods ? gods.map((god) => <GodCard key={god.id} god={god} />) : null}
    </div>
  );
};

export default Gods;
