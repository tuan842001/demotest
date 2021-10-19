import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div
        className="headerBackground"
        image-src="./assets/images/elements.jpg"
      ></div>
      <div className="headerTitles">
        <span className="headerTitleSm">Thực hiện chuyến đi của bạn với</span>
        <span className="headerTitleLg">Aveiro Travel</span>
      </div>
    </div>
  );
}
