import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div class="container">
        <div class="row ">
          <div class="col-md-12">
            <div class="home_content">
              <div class="home_content_inner">
                <div class="home_title">Đăng ký</div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="login-form">
              <div class="main-div">
                <form id="Login" enctype="multipart/form-data" method="post">
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
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      value=""
                      id="inputEmail"
                      name="email"
                      placeholder="Email"
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

                  <div class="form-group">
                    <input
                      type="password"
                      value=""
                      class="form-control"
                      name="password"
                      id="inputPassword"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <button
                    class="btn btn-gradient-01"
                    name="action"
                    value="add-khachhang"
                    id="add-tour"
                    type="submit"
                  >
                    <i class="la la-check"></i>Đăng ký
                  </button>
                  <button class="btn btn-gradient-01">
                    <a href="index.php?page=login">Đăng nhập</a>
                  </button>
                  <button class="btn btn-gradient-01" type="reset">
                    <i class="la la-rotate-left"></i>Reset
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
