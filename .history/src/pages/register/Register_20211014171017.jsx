import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <img className="loginImg" src="./assets/images/register2.jpg" alt="" />
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
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
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
                      class="form-control"
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
                  <div className="forgot">
                    <p></p> <a href="index.php?page=register">Đăng ký</a>
                  </div>
                  <button type="submit" className="login-form btn btn-primary ">
                    Đăng nhập
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
