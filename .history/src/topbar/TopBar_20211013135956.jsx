import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">Trang Chủ</li>
          <li className="topListItem">Du lịch trong nước</li>
          <li className="topListItem">Du lịch nước ngoài</li>
          <li className="topListItem">Tin tức</li>
        </ul>
      </div>
      <div className="topRight"></div>
    </div>
  );
}
