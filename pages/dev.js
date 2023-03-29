//page to test server
import { useState } from "react";

import styles from "@/styles/dev.module.scss";

const serverUrl = "http://localhost:4000";

const DevPage = () => {
  const [playerSearch, setPlayerSearch] = useState();

  const handlePing = async () => {
    const resp = await fetch(`${serverUrl}/api`);
    const data = await resp.json();
    console.log(data);
  };

  const handleSmitePing = async () => {
    const resp = await fetch(`${serverUrl}/smiteapi`);
    const data = await resp.json();
    console.log(data);
  };

  const handleCreateSession = async () => {
    const resp = await fetch(`${serverUrl}/createsession`);
    const data = await resp.json();
    console.log(data);
  };

  const handleTestSession = async () => {
    const resp = await fetch(`${serverUrl}/testsession`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetPatchNotes = async () => {
    const resp = await fetch(`${serverUrl}/patchnotes`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetUsedData = async () => {
    const resp = await fetch(`${serverUrl}/getuseddata`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetGods = async () => {
    const resp = await fetch(`${serverUrl}/getgods`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetItems = async () => {
    const resp = await fetch(`${serverUrl}/getitems`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetPlayer = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      `${serverUrl}/getplayer/${playerSearch.toLowerCase()}`
    );
    const data = await resp.json();
    console.log(data);
  };

  const handleSearch = (e) => {
    setPlayerSearch(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.dev}>
      <div className={styles.devButtons}>
        <button onClick={() => handlePing()}>Ping server</button>
        <button onClick={() => handleSmitePing()}>Ping Smite API</button>
        <button onClick={() => handleCreateSession()}>Create Session</button>
        <button onClick={() => handleTestSession()}>Test Session</button>
        <button onClick={() => handleGetPatchNotes()}>Get Patch Notes</button>
        <button onClick={() => handleGetUsedData()}>Get Data Used</button>
        <button onClick={() => handleGetGods()}>Get Gods</button>
        <button onClick={() => handleGetItems()}>Get Items</button>
      </div>
      <form onSubmit={(e) => handleGetPlayer(e)}>
        <input
          type="search"
          placeholder="Search for player"
          onChange={(e) => handleSearch(e)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default DevPage;
