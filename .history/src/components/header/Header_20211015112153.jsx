import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerBackground">
        <img src="./assets/images/elements.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="headerTitles">
              <span className="headerTitleSm">Chào mừng đến với</span>
              <span className="headerTitleLg">Aveiro Travel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
