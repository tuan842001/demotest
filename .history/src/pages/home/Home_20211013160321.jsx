import Header from "../../header/Header";
import Posts from "../../post/Post";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
      </div>
    </>
  );
}
