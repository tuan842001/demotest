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
                <li className="dropdown">
                  <sapn className="sortingText">Tìm theo</sapn>
                  <i class="fa fa-angle-down"></i>
                  {/* <ul class="dropdown-content">
                    <li className="sortingItemBtn">
                      <span>Hiển thị tất cả</span>
                      <span>Theo giá</span>
                      <span>Theo tên</span>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <sapn className="sortingText">Chất lượng</sapn>
                  <i class="fa fa-angle-down"></i>
                  <ul class="dropdown-content">
                    <li className="sortingItemBtn">
                      <span>Hiển thị tất cả</span>
                      <span>Tăng dần</span>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <sapn className="sortingText">Giá</sapn>
                  <i class="fa fa-angle-down"></i>
                  <ul class="dropdown-content">
                    <li className="sortingItemBtn">
                      <span>Hiển thị tất cả</span>
                      <span>Theo giá</span>
                      <span>Theo tên</span>
                    </li>
                  </ul>
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
              style={{ position: "relative", height: "699px" }}
            >
              <div
                className="item rating_5 box"
                style={{ position: "absolute", left: "0px", top: "0px" }}
              >
                <a href="#">
                  <div class="itemImg">
                    <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                  </div>
                  <div class="itemContent">
                    <div class="itemPrice">5.000.000 VNĐ</div>
                    <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                    <div class="rating rating_5" data-rating="5">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="itemMore">
                      Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những bãi
                      biển đẹp của miền Trung
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="item rating_5 box"
                style={{ position: "absolute", left: "0px", top: "0px" }}
              >
                <a href="#">
                  <div class="itemImg">
                    <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                  </div>
                  <div class="itemContent">
                    <div class="itemPrice">5.000.000 VNĐ</div>
                    <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                    <div class="rating rating_5" data-rating="5">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="itemMore">
                      Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những bãi
                      biển đẹp của miền Trung
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="item rating_5 box"
                style={{ position: "absolute", left: "0px", top: "0px" }}
              >
                <a href="#">
                  <div class="itemImg">
                    <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                  </div>
                  <div class="itemContent">
                    <div class="itemPrice">5.000.000 VNĐ</div>
                    <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                    <div class="rating rating_5" data-rating="5">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="itemMore">
                      Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những bãi
                      biển đẹp của miền Trung
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="item rating_5 box"
                style={{ position: "absolute", left: "0px", top: "0px" }}
              >
                <a href="#">
                  <div class="itemImg">
                    <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                  </div>
                  <div class="itemContent">
                    <div class="itemPrice">5.000.000 VNĐ</div>
                    <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                    <div class="rating rating_5" data-rating="5">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="itemMore">
                      Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những bãi
                      biển đẹp của miền Trung
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="item rating_5 box"
                style={{ position: "absolute", left: "0px", top: "0px" }}
              >
                <a href="#">
                  <div class="itemImg">
                    <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                  </div>
                  <div class="itemContent">
                    <div class="itemPrice">5.000.000 VNĐ</div>
                    <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                    <div class="rating rating_5" data-rating="5">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="itemMore">
                      Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những bãi
                      biển đẹp của miền Trung
                    </div>
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
