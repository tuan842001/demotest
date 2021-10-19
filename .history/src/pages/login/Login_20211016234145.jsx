import "./login.css";
import { Link } from "react-router-dom";
import Bottombar from "../../components/bottombar/Bottombar";

export default function Login() {
  return (
    <>
      <div className="login">
        <img
          className="loginImg"
          src="./assets/images/signin_background.jpg"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="loginContent">
                <div className="loginContentInner">
                  <div className="loginTitle">Đăng nhập</div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="loginFrom">
                <div className="loginMain">
                  <form id="Login" method="post">
                    <div className="form-group">
                      <div className="form-title">Tài khoản/Email</div>
                      <input
                        name="email"
                        type="email"
                        className="form-control loginform"
                        id="inputUsername"
                        placeholder="Tên tài khoản"
                      />
                    </div>
                    <div>Mật khẩu</div>
                    <div className="form-group">
                      <input
                        name="password"
                        type="password"
                        className="form-control loginform"
                        id="inputPassword"
                        placeholder="Mật khẩu"
                      />
                    </div>
                    <div className="forgot">
                      <Link to="/register">Đăng ký</Link>
                    </div>
                    <button
                      type="submit"
                      className="login-form btn btn-primary "
                    >
                      Đăng nhập
                    </button>
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
