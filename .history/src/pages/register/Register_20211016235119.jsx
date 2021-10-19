import "./register.css";
import { Link } from "react-router-dom";
import Bottombar from "../../components/bottombar/Bottombar";

export default function Register() {
  return (
    <>
      <div className="register">
        <img className="loginImg" src="./assets/images/register2.jpg" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="loginContent">
                <div className="loginContentInner">
                  <div className="loginTitle">Đăng ký</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="loginFrom">
                <div className="loginMain">
                  <form id="Login" method="post">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control loginform"
                        value=""
                        id="inputEmail"
                        name="name"
                        placeholder="Họ và tên"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control loginform"
                        id="inputUsername"
                        placeholder="Tên tài khoản"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        value=""
                        class="form-control loginform"
                        id="inputEmail"
                        name="sdt"
                        placeholder="Số điện thoại"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        type="password"
                        className="form-control loginform"
                        id="inputPassword"
                        placeholder="Mật khẩu"
                      />
                    </div>

                    <div className="registerbtn">
                      <button
                        class="btn btn-primary"
                        name="action"
                        value="add-khachhang"
                        id="add-tour"
                        type="submit"
                      >
                        <i class="la la-check"></i>Đăng ký
                      </button>

                      <div class="btn btn-primary">
                        <Link to="/login">Đăng nhập</Link>
                      </div>
                      <input
                        class="btn btn-primary"
                        type="reset"
                        value="Reset"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
