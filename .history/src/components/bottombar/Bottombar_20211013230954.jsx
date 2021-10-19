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
          Liên hệ với chúng tô<i></i>
        </span>
        <div className="bottomItem">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
      <div className="bottomRight"></div>
    </div>
  );
}
