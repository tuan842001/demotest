import "./popular.css";

export default function Popular() {
  return (
    <div className="popular">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title">
              <h2>Thư Viện</h2>
              <div>Khoảnh khắc đẹp nhất</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="popularList">
            <div className="popularItem"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
