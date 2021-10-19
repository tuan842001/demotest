import { Link } from "react-router-dom";
import HeaderIntour from "../../components/header/HeaderIntour";
import HeaderOuttour from "../../components/header/HeaderOuttour";
import Offers from "../../components/offers/Offers";
import IntourPost from "../../components/intourPost/IntourPost";
import Bottombar from "../../components/bottombar/Bottombar";
import "./test.css";

export default function Ontour() {
  return (
    <>
      <HeaderOuttour />
      <div className="outour">
        <Offers />
      </div>
      <Bottombar />
    </>
  );
}
