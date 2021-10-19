import Header from "../../header/Header";
import Posts from "../../post/Post";
import Siderbar from "../../siderbar/Siderbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Siderbar />
      </div>
    </>
  );
}
