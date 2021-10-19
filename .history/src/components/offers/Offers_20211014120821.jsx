import "./offers.css";

export default function Offers() {
  return (
    <div className="offers">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="sectionTitle">
              <h2>Các điểm đến hàng đầu ở Việt Nam</h2>
              <div>Truyền thống vẻ vang của dân tộc</div>
            </div>
          </div>
        </div>
        <div className="row filtering_row">
          <div className="col colEdit">
            <div className="sortingGroup1">
              <ul className="sortingItem">
                <li>
                  <sapn className="sortingText">Tìm theo</sapn>
                  <i class="fa fa-angle-down"></i>
                </li>
                <li>
                  <sapn className="sortingText">Chất lượng</sapn>
                  <i class="fa fa-angle-down"></i>
                </li>
                <li>
                  <sapn className="sortingText">Giá</sapn>
                  <i class="fa fa-angle-down"></i>
                </li>
              </ul>
            </div>
            <div className="sortingGroup1">
              <ul className="sortingIcon"></ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="items"
              // style="position: relative; height: 699px;"
            >
              <div
                className="item rating_5 box"
                // style="position: absolute; left: 0px; top: 0px;"
              >
                <a href="#">
                  <div class="item_image">
                    <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                  </div>
                  <div class="item_content">
                    <div class="item_price">5.000.000 VNĐ</div>
                    <div class="item_title">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                    <div class="rating rating_5" data-rating="5">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
