import { Page } from "@/components";
import { Link } from "react-router-dom";
import { Center } from "@anya-ui/components";

const Home = () => {
  return (
    <Page>
      <Center>
        <h1>Qubi UI</h1>
      </Center>
      <ul>
        <li>
          <Link to="/stack">Stack</Link>
        </li>
        <li>
          <Link to="/reel">Reel</Link>
        </li>
        <li>
          <Link to="/center">Center</Link>
        </li>
      </ul>
    </Page>
  );
};

export default Home;
