import Header from "../../components/header/Header";
import IntourPost from "../../components/intourPost/IntourPost";
import "./intour.css";

export default function Intour() {
  return (
    <>
      <Header />
      <div className="intour">
        <IntourPost />
      </div>
    </>
  );
}
