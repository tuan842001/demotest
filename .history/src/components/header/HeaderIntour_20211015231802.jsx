import "./header.css";

export default function Header() {
  return (
    <div className="headerIntour">
      <div className="headerIntourBackground">
        <img src="./assets/images/news_2.jpg" alt="" />
      </div>
      <div className="headerIContent">
        <div className="headerTitles">
          <span className="headerTitleSm">Chào mừng bạn đến với</span>
          <span className="headerTitleLg">Aveiro Travel</span>
        </div>
      </div>
    </div>
  );
}
