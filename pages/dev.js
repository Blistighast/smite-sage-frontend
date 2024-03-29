//page to test server
import { useState } from "react";

import styles from "@/styles/dev.module.scss";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const DevPage = () => {
  const [playerSearch, setPlayerSearch] = useState();

  const handleSmiteDbUpdate = async () => {
    const resp = await fetch(`${serverUrl}/smiteapi/manualdbupdate`);
    const data = await resp.json();
    console.log(data);
  };

  const handleArticleUpdate = async () => {
    const resp = await fetch(`${serverUrl}/article/articleupdate`);
    const data = await resp.json();
    console.log(data);
  };

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
    const resp = await fetch(`${serverUrl}/smiteapi/createsession`);
    const data = await resp.json();
    console.log(data);
  };

  const handleTestSession = async () => {
    const resp = await fetch(`${serverUrl}/smiteapi/testsession`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetPatchNotes = async () => {
    const resp = await fetch(`${serverUrl}/smiteapi/patchnotes`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetUsedData = async () => {
    const resp = await fetch(`${serverUrl}/smiteapi/getuseddata`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetGods = async () => {
    const resp = await fetch(`${serverUrl}/gods`);
    const data = await resp.json();
    console.log(data);
  };

  const handleRecommendedItems = async () => {
    const resp = await fetch(`${serverUrl}/gods/recommendeditems/3492`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGetItems = async () => {
    const resp = await fetch(`${serverUrl}/items`);
    const data = await resp.json();
    console.log(data);
  };

  const handleGodCount = async () => {
    const resp = await fetch(`${serverUrl}/gods/godscount`);
    const countData = await resp.json();
    console.log(countData);
  };

  const handleWebScraper = async () => {
    const res = await fetch(`${serverUrl}/article/checkscraper`);
    const scrapeData = await res.json();
    console.log(scrapeData);
  };

  const handleGetPlayer = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      `${serverUrl}/player/${playerSearch.toLowerCase()}`
    );
    const data = await resp.json();
    console.log(data);
  };

  const handleSearch = (e) => {
    setPlayerSearch(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.dev}>
      <button onClick={() => handleSmiteDbUpdate()}>
        Update Smite database
      </button>
      <button onClick={() => handleArticleUpdate()}>Update Articles</button>
      <div className={styles.devButtons}>
        <button onClick={() => handlePing()}>Ping server</button>
        <button onClick={() => handleSmitePing()}>Ping Smite API</button>
        <button onClick={() => handleCreateSession()}>Create Session</button>
        <button onClick={() => handleTestSession()}>Test Session</button>
        <button onClick={() => handleGetPatchNotes()}>Get Patch Notes</button>
        <button onClick={() => handleGetUsedData()}>Get Data Used</button>
        <button onClick={() => handleGetGods()}>Get Gods</button>
        <button onClick={() => handleGetItems()}>Get Items</button>
        <button onClick={() => handleRecommendedItems()}>
          Check Achilles recommended Items
        </button>
        <button onClick={() => handleGodCount()}>Count Gods</button>
        <button onClick={() => handleWebScraper()}>Check Smite Scraper</button>
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
