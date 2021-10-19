import Header from "../../components/header/HeaderHome";
import Top from "../../components/top/Top";
import Posts from "../../components/posts/Posts";
import Last from "../../components/last/Last";
import Video from "../../components/video/Video";
import Popular from "../../components/popular/Popular";
import Special from "../../components/special/Special";
import Bottombar from "../../components/bottombar/Bottombar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Top />
        <Top />
      </div>
      <Last />
      <Video />
      <Popular />
      <Special />
      <Bottombar />
    </>
  );
}
