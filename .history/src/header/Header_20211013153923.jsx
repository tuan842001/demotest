import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Take Your Next Trip with</span>
        <span className="headerTitleLg">Aveiro Travel</span>
      </div>
      <img
        className="headerTitImg"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fvntravel%2F&psig=AOvVaw39EpiupEtQG00p59Pjk78w&ust=1634200734329000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD_i6X-xvMCFQAAAAAdAAAAABAD"
        alt=""
      />
    </div>
  );
}
