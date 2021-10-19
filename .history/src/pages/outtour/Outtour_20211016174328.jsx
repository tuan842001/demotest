import "./test.css";
export default function Outtour() {
  return (
    <div className="outtour">
      <div class="home">
        <div class="offers">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section_title text-center">
                  <h2>Các điểm đến hàng đầu ở Trái Đất</h2>
                  <div>Tận hưỡng những giây phút đầm ấm với gia đình</div>
                </div>
              </div>
            </div>
            <div class="row filtering_row">
              <div class="col col-edit-db">
                <div class="sorting_group_1">
                  <ul class="item_sorting">
                    <li>
                      <span class="sorting_text">Tìm theo</span>
                      <i class="fa fa-angle-down"></i>
                      <ul>
                        <li
                          class="item_sorting_btn"
                          data-isotope-option='{ "sortBy": "original-order" }'
                        >
                          <span>Hiển trị tất cả</span>
                        </li>
                        <li
                          class="item_sorting_btn"
                          data-isotope-option='{ "sortBy": "price" }'
                        >
                          <span>Theo giá</span>
                        </li>
                        <li
                          class="item_sorting_btn"
                          data-isotope-option='{ "sortBy": "name" }'
                        >
                          <span>Theo tên</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span class="sorting_text">Chất lượng</span>
                      <i class="fa fa-angle-down"></i>
                      <ul>
                        <li class="item_filter_btn" data-filter="*">
                          <span>Hiển thị tất cả</span>
                        </li>
                        <li
                          class="item_sorting_btn"
                          data-isotope-option='{ "sortBy": "stars" }'
                        >
                          <span>Tăng dần</span>
                        </li>
                        <li class="item_filter_btn" data-filter=".rating_1">
                          <span>1</span>
                        </li>
                        <li class="item_filter_btn" data-filter=".rating_2">
                          <span>2</span>
                        </li>
                        <li class="item_filter_btn" data-filter=".rating_3">
                          <span>3</span>
                        </li>
                        <li class="item_filter_btn" data-filter=".rating_4">
                          <span>4</span>
                        </li>
                        <li class="item_filter_btn" data-filter=".rating_5">
                          <span>5</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span class="sorting_text">Giá</span>
                      <i class="fa fa-angle-down"></i>
                      <ul>
                        <li
                          class="item_sorting_btn"
                          data-isotope-option='{ "sortBy": "original-order" }'
                        >
                          <span>Măc định</span>
                        </li>
                        <li
                          class="item_sorting_btn"
                          data-isotope-option='{ "sortBy": "price" }'
                        >
                          <span>Giá bán</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="sorting_group_2 clearfix">
                  <div class="sorting_icons clearfix">
                    <div class="detail_view">
                      <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div class="box_view">
                      <i class="fa fa-th-large" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="items item_grid clearfix">
                  <div
                    className="item clearfix rating_5 box"
                    // style={{ position: "absolute", left: "0px", top: "0px" }}
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
                          Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những
                          bãi biển đẹp của miền Trung
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="item clearfix rating_5 box"
                    // style={{ position: "absolute", left: "672px", top: "0px" }}
                  >
                    <a href="#">
                      <div class="itemImg">
                        <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                      </div>
                      <div class="itemContent">
                        <div class="itemPrice">15.000.000 VNĐ</div>
                        <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                        <div class="rating rating_5" data-rating="5">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="itemMore">
                          Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những
                          bãi biển đẹp của miền Trung
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="item clearfix rating_5 box"
                    // style={{ position: "absolute", left: "672px", top: "0px" }}
                  >
                    <a href="#">
                      <div class="itemImg">
                        <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                      </div>
                      <div class="itemContent">
                        <div class="itemPrice">15.000.000 VNĐ</div>
                        <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                        <div class="rating rating_5" data-rating="5">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="itemMore">
                          Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những
                          bãi biển đẹp của miền Trung
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="item clearfix rating_5 box"
                    // style={{ position: "absolute", left: "672px", top: "0px" }}
                  >
                    <a href="#">
                      <div class="itemImg">
                        <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                      </div>
                      <div class="itemContent">
                        <div class="itemPrice">15.000.000 VNĐ</div>
                        <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                        <div class="rating rating_5" data-rating="5">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="itemMore">
                          Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những
                          bãi biển đẹp của miền Trung
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="item clearfix rating_5 box"
                    // style={{ position: "absolute", left: "672px", top: "0px" }}
                  >
                    <a href="#">
                      <div class="itemImg">
                        <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                      </div>
                      <div class="itemContent">
                        <div class="itemPrice">15.000.000 VNĐ</div>
                        <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                        <div class="rating rating_5" data-rating="5">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="itemMore">
                          Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những
                          bãi biển đẹp của miền Trung
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="item clearfix rating_5 box"
                    // style={{ position: "absolute", left: "672px", top: "0px" }}
                  >
                    <a href="#">
                      <div class="itemImg">
                        <img src="./assets/images/tour/Langbiang-dalat-vietnam_519197881.jpg" />
                      </div>
                      <div class="itemContent">
                        <div class="itemPrice">15.000.000 VNĐ</div>
                        <div class="itemTitle">DU LỊCH NHA TRANG - ĐÀ LẠT</div>
                        <div class="rating rating_5" data-rating="5">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="itemMore">
                          Chiêm ngưỡng vẻ đẹp của biển Cà Ná - một trong những
                          bãi biển đẹp của miền Trung
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="pages">
                <ul class="pages_list">
                  <li class="page active">
                    <a href="#">01.</a>
                  </li>
                  <li class="page">
                    <a href="#">02.</a>
                  </li>
                  <li class="page">
                    <a href="#">03.</a>
                  </li>
                  <li class="page">
                    <a href="#">04.</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
