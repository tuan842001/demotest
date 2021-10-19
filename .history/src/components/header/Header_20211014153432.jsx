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
          <div className="headerTitleSm">Thực hiện chuyến đi của bạn với</div>
          <br />
          <div className="headerTitleLg">Aveiro Travel</div>
        </div>
      </div>
    </div>
  );
}
