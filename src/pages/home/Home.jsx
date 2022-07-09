import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
      </div>
      <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" width="100%" />
    </>
  );
};

export default Home;
