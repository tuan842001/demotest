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
              to="/outtour"
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
              to="/news"
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
              to="/contact"
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
        <div className="topList">
          <div className="topSeach">
            <form action="" method="post">
              <input
                type="text"
                name="search"
                class="ipt"
                placeholder="Bắt đầu tìm kiếm..."
              />
              <input
                type="reset"
                name="submit"
                class="sm"
                value=""
                id="btnSearchTour"
              />
              <i className="topSearchIcon fas fa-search"></i>
            </form>
          </div>
          <div className="topUser">
            <i class="topSearchIcon fas fa-user">
              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontsize: "20px",
                }}
                to="/login"
              ></Link>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
