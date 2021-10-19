import HeaderOuttour from "../../components/header/HeaderOuttour";
import Bottombar from "../../components/bottombar/Bottombar";
import "./contact.css";

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
              <div className="contactInfo">
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
              <div className="ContactFormContainer">
                <form action="#" id="contact_form" class="clearfix">
                  <input
                    id="contact_input_name"
                    class="contact_input contact_input_name"
                    type="text"
                    placeholder="Tên"
                    required="required"
                    data-error="Name is required."
                  />
                  <input
                    id="contact_input_email"
                    class="contact_input contact_input_email"
                    type="text"
                    placeholder="E-mail"
                    required="required"
                    data-error="E-mail is required."
                  />
                  <input
                    id="contact_input_subject"
                    class="contact_input contact_input_subject"
                    type="text"
                    placeholder="Tiêu đề"
                  />
                  <textarea
                    id="contact_input_message"
                    class="contact_message_input contact_input_message"
                    name="message"
                    placeholder="Nội dung"
                    required="required"
                    data-error="Please, write us a message."
                  ></textarea>
                  <button
                    id="contact_send_btn"
                    type="submit"
                    class="contact_send_btn trans_200"
                    value="Submit"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
