import { Link } from "react-router-dom";
import React from "react";
import "./topbar.css";

export default function TopBar() {
  const user = false;
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
          <li className="topListItem">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontsize: "20px",
              }}
              to="/"
            >
              Trang Chủ
            </Link>
          </li>
          <li className="topListItem">
            <Link
              className="active"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontsize: "20px",
              }}
              to="/intour"
            >
              Du lịch trong nước
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontsize: "20px",
              }}
              to="/intour"
            >
              Du lịch nước ngoài
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontsize: "20px",
              }}
              to="/intour"
            >
              Tin tức
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontsize: "20px",
              }}
              to="/intour"
            >
              Liên hệ
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontsize: "20px",
              }}
              to="/login"
            >
              Đăng nhập
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontsize: "20px",
              }}
              to="/register"
            >
              Đăng ký
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
