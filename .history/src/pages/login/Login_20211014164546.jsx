import "./login.css";
import Bottombar from "../../components/bottombar/Bottombar";

export default function Login() {
  return (
    <>
      <div className="login">
        <img className="loginImg" src="./assets/images/register.jpeg" alt="" />
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
                      <input
                        name="email"
                        type="email"
                        className="form-control loginform"
                        id="inputUsername"
                        placeholder="Tên tài khoản"
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
                    <div className="forgot">
                      <p></p> <a href="index.php?page=register">Đăng ký</a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary login-form"
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
