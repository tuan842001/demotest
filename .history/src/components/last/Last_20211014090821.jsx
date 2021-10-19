import "./last.css";

export default function Last() {
  return (
    <div className="last">
      <img className="lastImg" src="./assets/images/last.jpg" alt="" />
      <div className="container">
        <div className="row">
          <div className="lastLeft">
            <div className="lastItem">
              <div className="lastItemContainer">
                <div className="lastSubtitle">Averio Travel</div>
                <div className="lastPercent">50%</div>
                <div className="lastTitle">
                  NHỮNG ĐỊA ĐIỂM VUI CHƠI Ở SENTOSA SINGAPORE TUYỆT ĐỐI KHÔNG
                  THỂ BỎ LỠ
                </div>
                <div className="lastText">
                  Toàn bộ Sentosa có 4 khu giải trí và nghỉ dưỡng, bao gồm:
                  Imbiah Lookout, Siloso Point, Beaches và Resorts World Sentosa
                  với nhiều khu vui chơi giải trí phù hợp với nhu cầu của khách
                  tham quan.
                </div>
                <div className="lastButton">
                  <a href="#">Xem chi tiết</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lastRight">
            <div className="lastItem">
              <div className="lastItemContainer">
                <div className="lastSubtitle">Averio Travel</div>
                <div className="lastPercent">50%</div>
                <div className="lastTitle">Tháp Eiffel Có Áo Mới</div>
                <div className="lastText">
                  Kể từ thời điểm này, nếu bạn đến Paris và ghé thăm tháp Eiffel
                  ở cự ly gần sẽ được nhìn thấy một bức tường kính ngay dưới
                  chân tháp.
                </div>
                <div className="lastButton">
                  <a href="#">Xem chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
