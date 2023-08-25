import Head from "next/head";

import styles from "@/styles/homepage.module.scss";
import Articles from "./../components/Articles";
import GodCard from "./../components/GodCard";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Home({ articles, latestGod }) {
  return (
    <>
      <Head>
        <title>Smite Sage</title>
        <meta name="description" content="For all your Smite info needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <Articles articles={articles} />
        <div className={styles.latestGod}>
          <h2>Latest Gods</h2>
          {latestGod.map((god) => (
            <GodCard key={god._id} god={god} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const majorPatchresp = await fetch(`${serverUrl}/article/majorPatchInfo`);
  const majorPatchData = await majorPatchresp.json();
  const minorPatchResp = await fetch(`${serverUrl}/article/minorPatchInfo`);
  const minorPatchData = await minorPatchResp.json();
  const godInfoResp = await fetch(`${serverUrl}/article/godInfo`);
  const godInfoData = await godInfoResp.json();
  const seasonInfoResp = await fetch(`${serverUrl}/article/seasonInfo`);
  const seasonInfoData = await seasonInfoResp.json();

  const latestGodResp = await fetch(`${serverUrl}/gods/latestGod`);
  const latestGodData = await latestGodResp.json();

  return {
    props: {
      articles: [
        majorPatchData[0],
        minorPatchData[0],
        godInfoData[0],
        seasonInfoData[0],
      ],
      latestGod: latestGodData,
    },
    revalidate: 60 * 60,
  };
}
