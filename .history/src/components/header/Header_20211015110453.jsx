import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div
        className="headerBackground"
        data-image-src="./assets/images/elements.jpg"
      >
        {/* <img src="./assets/images/elements.jpg" alt="" /> */}
      </div>
      <div className="headerTitles">
        <span className="headerTitleSm">Thực hiện chuyến đi của bạn với</span>
        <span className="headerTitleLg">Aveiro Travel</span>
      </div>
    </div>
  );
}
