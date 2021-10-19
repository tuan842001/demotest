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
        <div className="row">
          <div className="lastLeft">
            <div className="lastItem">
              <div className="lastItemContainer">
                <div className="lastSubtitle">Averio Travel</div>
              </div>
            </div>
          </div>
          <div className="lastRight">
            <div className="lastItem">
              <div className="lastItemContainer">
                <div className="lastSubtitle">Averio Travel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
