import { useEffect, useState } from "react";
import styles from "@/styles/cards-container.module.scss";
import GodCard from "./../components/GodCard";
import { testGods } from "../testData";

const serverUrl = "http://localhost:4000";

const Gods = () => {
  const [gods, setGods] = useState(testGods);

  const getGods = async () => {
    const resp = await fetch(`${serverUrl}/getgods`);
    const data = await resp.json();
    setGods(data);
  };

  useEffect(() => {
    getGods();
  }, []);

  return (
    <div className={`${styles.cardsContainer}`}>
      {gods ? (
        gods.map((god) => <GodCard key={god._id} god={god} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Gods;
