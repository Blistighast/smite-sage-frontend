//page to test server

const serverUrl = "http://localhost:4000";

const DevPage = () => {
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

  const getPatchNotes = async () => {
    const resp = await fetch(`${serverUrl}/patchnotes`);
    const data = await resp.json(resp);
    console.log(data);
  };

  const getItems = async () => {
    const resp = await fetch(`${serverUrl}/getitems`);
    const data = await resp.json();
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

  const handleListItems = () => {
    getItems();
  };

  const handleGetPatchNotes = () => {
    getPatchNotes();
  };

  return (
    <div>
      <button onClick={() => handlePing()}>Ping server</button>
      <button onClick={() => handleSmitePing()}>Ping Smite API</button>
      <button onClick={() => handleCreateSession()}>Create Session</button>
      <button onClick={() => handleTestSession()}>Test Session</button>
      <button onClick={() => handleListItems()}>List Items</button>
      <button onClick={() => handleGetPatchNotes()}>Get Patch Notes</button>
    </div>
  );
};

export default DevPage;
