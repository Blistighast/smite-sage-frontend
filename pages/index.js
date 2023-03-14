import Head from "next/head";
import { useState } from "react";

import styles from "@/styles/Home.module.scss";

const serverUrl = "http://localhost:4000";

export default function Home() {
  const [gods, setGods] = useState([]);

  const pingServer = async () => {
    // const resp = await fetch("http://localhost:4000/api");
    const resp = await fetch(`${serverUrl}/api`);
    const data = await resp.json();
    console.log(data);
  };

  const pingSmiteServer = async () => {
    const resp = await fetch(`${serverUrl}/smiteapi`);
    const data = await resp.json();
    console.log(data);
  };

  const createSession = async () => {
    const resp = await fetch(`${serverUrl}/createsession`);
    const data = await resp.json();
    console.log(data);
  };

  const testSession = async () => {
    const resp = await fetch(`${serverUrl}/testsession`);
    const data = await resp.json();
    console.log(data);
  };

  const getGods = async () => {
    const resp = await fetch(`${serverUrl}/getgods`);
    const data = await resp.json();
    console.log(data);
    setGods(data);
  };

  const getPatchNotes = async () => {
    const resp = await fetch(`${serverUrl}/patchnotes`);
    const data = await resp.json(resp);
    console.log(data);
  };

  const handlePing = () => {
    pingServer();
  };

  const handleSmitePing = () => {
    pingSmiteServer();
  };

  const handleCreateSession = () => {
    createSession();
  };

  const handleTestSession = () => {
    testSession();
  };

  const handleGetGods = () => {
    getGods();
  };

  const handleGetPatchNotes = () => {
    getPatchNotes();
  };

  return (
    <>
      <Head>
        <title>Smite Sage</title>
        <meta name="description" content="For all your Smite info needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <button onClick={() => handlePing()}>Ping server</button>
          <button onClick={() => handleSmitePing()}>Ping Smite API</button>
          <button onClick={() => handleCreateSession()}>Create Session</button>
          <button onClick={() => handleTestSession()}>Test Session</button>
          <button onClick={() => handleGetGods()}>Get Gods</button>
          <button onClick={() => handleGetPatchNotes()}>Get Patch Notes</button>
          <div>
            {gods
              ? gods.map((god) => <div key={god.id}>{god.Name}</div>)
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
