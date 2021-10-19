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
              <div className="contactTitle">Liên hệ với chúng tôi</div>
              <div className="contactSubtitle">Hãy nói xin chào</div>
            </div>
          </div>
          <div className="row contactContent">
            <div className="col-lg-5">
              <div className="contactText"></div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
