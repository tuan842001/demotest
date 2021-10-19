import HeaderOuttour from "../../components/header/HeaderOuttour";
import Bottombar from "../../components/bottombar/Bottombar";

export default function Contact() {
  return (
    <>
      <HeaderOuttour />
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contactTitle"></div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
