import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img
          className="topImg"
          src="./assets/images/logoAveiroTravel.png"
          alt=""
        />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Trang Chủ</li>
          <li className="topListItem">Du lịch trong nước</li>
          <li className="topListItem">Du lịch nước ngoài</li>
          <li className="topListItem">Tin tức</li>
          <li className="topListItem">Liên hệ</li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
