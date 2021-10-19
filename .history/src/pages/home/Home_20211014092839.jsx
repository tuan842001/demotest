import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Last from "../../components/last/Last";
import Video from "../../components/video/Video";
import Bottombar from "../../components/bottombar/Bottombar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
      <Last />
      <Video />
      <Bottombar />
    </>
  );
}
