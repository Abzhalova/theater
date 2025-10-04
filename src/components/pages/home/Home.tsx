import Subscription from "../subscription/Subscription";
import Welcome from "../welcome/Welcome";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Welcome />
      <Subscription />
    </>
  );
};

export default Home;
