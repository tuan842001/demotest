import Header from "../../components/header/Header";
import Top from "../../components/top/Top";
import Posts from "../../components/posts/Posts";
import Last from "../../components/last/Last";
import Video from "../../components/video/Video";
import Popular from "../../components/popular/Popular";
import Bottombar from "../../components/bottombar/Bottombar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Top />
        <Posts />
      </div>
      <Last />
      <Video />
      <Popular />
      <Bottombar />
    </>
  );
}
