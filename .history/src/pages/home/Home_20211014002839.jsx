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
                <div className="lastPercent">50%</div>
                <div className="lastTitle">
                  NHỮNG ĐỊA ĐIỂM VUI CHƠI Ở SENTOSA SINGAPORE TUYỆT ĐỐI KHÔNG
                  THỂ BỎ LỠ
                </div>
                <div className="lastText">
                  Toàn bộ Sentosa có 4 khu giải trí và nghỉ dưỡng, bao gồm:
                  Imbiah Lookout, Siloso Point, Beaches và Resorts World Sentosa
                  với nhiều khu vui chơi giải trí phù hợp với nhu cầu của khách
                  tham quan.
                </div>
              </div>
              <div className="lastButton">
                <a href="#">Xem chi tiết</a>
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
