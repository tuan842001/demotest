import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topImg" src="./assets/logoAveiroTravel.png" alt="" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Trang Chủ</li>
          <li className="topListItem">Du lịch trong nước</li>
          <li className="topListItem">Du lịch nước ngoài</li>
          <li className="topListItem">Tin tức</li>
        </ul>
      </div>
      <div className="topRight">
        <button type="submit" className="topSharebtn">
          <i className="topSearchIcon fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}
