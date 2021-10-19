import "./bottombar.css";

export default function Bottombar() {
  return (
    <div className="bottombar">
      <div className="bottomLeft">
        <span className="bottomTitle">LIÊN HỆ</span>
        <span className="bottomText">Aveiro Travel</span>
        <span className="bottomText">Đường Z115 - xã Quyết Thắng</span>
        <span className="bottomText">TP. Thái Nguyên – tỉnh Thái Nguyên</span>
      </div>
      <div className="bottomCenter">
        <span className="bottomText">Phone: 0966245700</span>
        <span className="bottomText">Email: Averirotravel@gmail.com</span>
        <span className="bottomText">
          Mạng xã hội <i></i>
        </span>
        <div className="bottomItem">
          <i className="bottomIcon fab fa-facebook-f"></i>
          <i className="bottomIcon fab fa-instagram"></i>
          <i className="bottomIcon fab fa-youtube"></i>
        </div>
      </div>
      <div className="bottomRight">
        <span className="bottomText">Đăng ký để nhận những tour mới nhất</span>
        <div className="bottomSubscribe">
          <i class="fas fa-envelope"></i>
          {/* <input
            type="text"
            name="EmailRegister"
            placeholder="Email của bạn"
            id="EmailRegisterFooter"
            required="required"
          /> */}
          {/* <input
            type="email"
            id="bottom_input"
            className="bottom_input"
            placeholder="Email của bạn"
          /> */}
          {/* <input type="submit" name="submit" class="sm" value="" /> */}
          <button type="submit" id="bottom_button" class="bottom_button">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}
