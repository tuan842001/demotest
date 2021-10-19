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
              <div className="contactText">
                <p>
                  Averio Travel là du lịch trên khắp cả nước Việt Nam và cả Thế
                  giới, kinh doanh đa dạng các tour du lịch khác nhau.
                </p>
              </div>
              <div className="ContactInfo">
                <div className="contactInfoContainer">
                  <ul>
                    <li>
                      Địa chỉ: Đường Z 115, Quyết Thắng, Thành phố Thái Nguyên,
                      Tỉnh Thái Nguyên
                    </li>
                    <li>Phone: 0966245700</li>
                    <li>Email: Averiotravel@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ContactFormContainer"></div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
