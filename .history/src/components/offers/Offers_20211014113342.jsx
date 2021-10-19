import React from "react";

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
          <div className="col">
            <div className="sortingGroup1">
              <ul className="sortingItem">
                <li>
                  <sapn className="sortingText">Tìm theo</sapn>
                  <i class="fa fa-angle-down"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
