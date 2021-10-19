import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Take Your Next Trip with</span>
        <span className="headerTitleLg">Aveiro Travel</span>
      </div>
      <img className="headerTitImg" src="./assets/images/elements.jpg" alt="" />
    </div>
  );
}
