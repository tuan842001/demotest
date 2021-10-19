import "./popular.css";

export default function Popular() {
  return (
    <div className="popular">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="sectionTitle">
              <h2>Thư Viện</h2>
              <div>Khoảnh khắc đẹp nhất</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="popularList">
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_8.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Myanma</div>
              </div>
            </div>
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_7.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Campuchia</div>
              </div>
            </div>
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_6.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Lào</div>
              </div>
            </div>
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_5.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Việt Nam</div>
              </div>
            </div>
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_4.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Japan</div>
              </div>
            </div>
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_3.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Malaysia</div>
              </div>
            </div>
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_2.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Canada</div>
              </div>
            </div>
            <div className="popularItem">
              <img src="./assets/images/gallery/popular_1.jpg" alt="" />
              <div className="popularItemText">
                <div className="popularItemTitle">Brazil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
