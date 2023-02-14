import GodPage from "../../components/GodPage";
import { useRouter } from "next/router";

export default function SingleGodPage() {
  const router = useRouter();

  return <GodPage id={router.query.id} />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
