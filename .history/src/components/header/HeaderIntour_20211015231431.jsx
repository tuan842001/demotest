import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerBackground">
        <img src="./assets/images/news_2.jpg" alt="" />
      </div>
      <div className="headerContent">
        <div className="headerTitles">
          <span className="headerTitleSm">Chào mừng bạn đến với</span>
          <span className="headerTitleLg">Aveiro Travel</span>
        </div>
      </div>
    </div>
  );
}
