import "./home.scss";
import Navbar from "../../components/Navbar/navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/list";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
