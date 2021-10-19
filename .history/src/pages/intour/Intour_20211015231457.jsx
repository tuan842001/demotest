import { Link } from "react-router-dom";
import Header from "../../components/header/HeaderIntour";
import Offers from "../../components/offers/Offers";
import IntourPost from "../../components/intourPost/IntourPost";
import Bottombar from "../../components/bottombar/Bottombar";
import "./intour.css";

export default function Intour() {
  return (
    <>
      <Header />
      <div className="intour">
        <Offers />
      </div>
      <Bottombar />
    </>
  );
}
