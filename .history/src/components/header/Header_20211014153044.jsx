import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerBackground">
        <img
          className="headerTitImg"
          src="./assets/images/elements.jpg"
          alt=""
        />
      </div>
      <div className="headerContent">
        <div className="headerTitles">
          <span className="headerTitleSm">Thực hiện chuyến đi của bạn với</span>
          <br />
          <span className="headerTitleLg">Aveiro Travel</span>
        </div>
      </div>
    </div>
  );
}
