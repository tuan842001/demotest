import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Bottombar from "../../components/bottombar/Bottombar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
      <div className="last">
        <img className="lastImg" src="./assets/images/last.jpg" alt="" />
        <div className="row"></div>
      </div>
      <Bottombar />
    </>
  );
}
