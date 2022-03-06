import { Page } from "@/components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Page>
      <h1>Qubi UI</h1>
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
