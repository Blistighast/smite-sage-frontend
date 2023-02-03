import { useEffect } from "react";
import { useState } from "react";

export default function GodPage({ id }) {
  const [god, setGod] = useState();

  const fetchGod = async () => {
    const resp = await fetch(`http://localhost:4000/gods/${id}`);
    const data = await resp.json();
    setGod(...data);
  };

  useEffect(() => {
    fetchGod();
    console.log(id);
  }, []);

  return (
    <div>
      <div>{god ? <div>{god.Name}</div> : <p>Loading...</p>}</div>
    </div>
  );
}
