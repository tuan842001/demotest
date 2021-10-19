import { Link } from "react-router-dom";
import HeaderIntour from "../../components/header/HeaderIntour";
import HeaderHome from "../../components/header/HeaderHome";
import Offers from "../../components/offers/Offers";
import IntourPost from "../../components/intourPost/IntourPost";
import Bottombar from "../../components/bottombar/Bottombar";
import "./test.css";

export default function Ontour() {
  return (
    <>
      <HeaderIntour />
      <div className="outour">
        <Offers />
      </div>
      <Bottombar />
    </>
  );
}
