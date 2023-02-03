import { useEffect, useState } from "react";
import GodCard from "./../components/GodCard";

const serverUrl = "http://localhost:4000";

const Gods = () => {
  const [gods, setGods] = useState(null);

  const getGods = async () => {
    const resp = await fetch(`${serverUrl}/getgods`);
    const data = await resp.json();
    setGods(data);
  };

  useEffect(() => {
    getGods();
  }, []);

  return (
    <div className="card-holder">
      {gods ? (
        gods.map((god) => <GodCard key={god._id} god={god} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Gods;
