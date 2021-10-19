import Header from "../../components/header/Header";
import IntourPost from "../../components/intourPost/IntourPost";
import Bottombar from "../../components/bottombar/Bottombar";
import "./intour.css";

export default function Intour() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Tour trong nước</span>
          <span className="headerTitleLg">Aveiro Travel</span>
        </div>
        <img
          className="headerTitImg"
          src="./assets/images/elements.jpg"
          alt=""
        />
      </div>
      <div className="intour">
        <IntourPost />
      </div>
      <Bottombar />
    </>
  );
}
