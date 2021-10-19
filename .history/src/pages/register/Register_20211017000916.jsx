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
              <div className="row">
                <div className="col-lg-12 col-md-12 noidungtin">
                  <form
                    action="/dang-ky-hoi-vien"
                    id="frm-dangky"
                    method="post"
                    novalidate="novalidate"
                  >
                    <input
                      name="__RequestVerificationToken"
                      type="hidden"
                      value="6FHaJt0eiVUbcGrUCI3ENpLiQKSkfFR7LLToSHlqL9n7KkMXagvJ-T-7quxvaco_06Q-2LG1ChEuDIi3WbxuVdQAIhgtHkIIMuM5OYeZBR01"
                    />{" "}
                    <div class="row" style="margin-bottom:10px">
                      <div
                        class="col-md-2 col-sm-2 col-xs-12"
                        style="margin-bottom:10px"
                      />
                      <label>
                        Họ tên <span style="color:red">(*)</span>:
                      </label>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                      <input
                        type="text"
                        name="CustomerName"
                        id="CustomerName"
                        class="form-control"
                        data-val="true"
                        data-val-required="Vui lòng nhập họ tên"
                      />
                      <div
                        class="field-validation-valid text-danger"
                        data-valmsg-for="CustomerName"
                        data-valmsg-replace="true"
                      ></div>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-12">
                      <label>
                        Giới tính <span style="color:red">(*)</span>:
                      </label>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                      <select
                        class="form-control valid"
                        data-val="true"
                        data-val-number="The field Gender must be a number."
                        id="Gender"
                        name="Gender"
                      >
                        <option value="1">Nam</option>
                        <option value="0">Nữ</option>
                      </select>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Ngày sinh <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          name="Birthday"
                          id="Birthday"
                          class="form-control"
                          data-val="true"
                          data-val-required="Vui lòng nhập ngày sinh"
                          autocomplete="off"
                        />
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="Birthday"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Di động <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="number"
                          name="Phone"
                          id="Phone"
                          class="form-control"
                          data-val="true"
                          data-val-required="Vui lòng nhập di động"
                        />
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="Phone"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>CMND:</label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          name="IdCard"
                          id="IdCard"
                          class="form-control"
                        />
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="IdCard"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>Ngày cấp :</label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          name="id_issue_date"
                          id="id_issue_date"
                          class="form-control"
                          autocomplete="off"
                        />
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="id_issue_date"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>Passport:</label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          class="form-control"
                          id="passport_no"
                          name="passport_no"
                          type="text"
                          value=""
                        />
                      </div>
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Email <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          class="form-control"
                          data-val="true"
                          data-val-email="Vui lòng nhập đúng định dạng email"
                          data-val-required="Vui lòng nhập email"
                          id="Email"
                          name="Email"
                          type="email"
                          autocomplete="new-password"
                        />
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="Email"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>Ngày cấp:</label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          name="issue_date"
                          id="issue_date"
                          class="form-control"
                          data-val="true"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>Ngày hết hạn:</label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          name="deadline_date"
                          id="deadline_date"
                          class="form-control"
                          data-val="true"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Quốc gia <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <select
                          id="CountryId"
                          name="CountryId"
                          class="form-control valid"
                          onchange="LoadTinhThanh('');"
                        ></select>
                      </div>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Tỉnh/TP <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12"></div>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Địa chỉ <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-10 col-sm-10 col-xs-12">
                        <input
                          type="text"
                          name="Address"
                          id="Address"
                          class="form-control"
                          data-val="true"
                          data-val-required="Vui lòng nhập địa chỉ"
                        />
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="Address"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                    </div>
                    <div class="row hide" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Nhận thẻ tại <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-10 col-sm-10 col-xs-12">
                        <select
                          id="OrgCode"
                          name="OrgCode"
                          class="form-control"
                          onchange="LoadTinhThanh('');"
                        ></select>
                      </div>
                    </div>
                    <div class="row" style="margin-bottom:10px">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>Mã giới thiệu:</label>
                      </div>
                      <div class="col-md-10 col-sm-10 col-xs-12">
                        <input
                          class="form-control"
                          id="ReferBy"
                          name="ReferBy"
                          type="text"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Mật khẩu <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div
                          class="input-group"
                          id="show_hide_password_Password"
                        >
                          <input
                            autocomplete="new-password"
                            type="password"
                            name="Password"
                            id="Password"
                            class="form-control"
                            data-val="true"
                            data-val-required="Vui lòng nhập mật khẩu"
                            aria-autocomplete="list"
                          />
                          <div class="input-group-addon">
                            <a>
                              <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="Password"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>
                          Nhập lại <span style="color:red">(*)</span>:
                        </label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div
                          class="input-group"
                          id="show_hide_password_RePassword"
                        >
                          <input
                            tautocomplete="new-password"
                            type="password"
                            name="RePassword"
                            id="RePassword"
                            class="form-control"
                            data-val="true"
                            data-val-equalto="Nhập lại khẩu không chính xác"
                            data-val-equalto-other="*.Password"
                            data-val-required="Vui lòng nhập lại mật khẩu"
                          />
                          <div class="input-group-addon">
                            <a>
                              <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="RePassword"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                    </div>
                    <div class="row" hidden="">
                      <div class="col-xs-12">
                        <hr />
                      </div>
                      <div class="col-md-12 col-sm-23 col-xs-12  mg-bot30">
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            id="isUseSocialMediaRegister"
                            name="isUseSocialMediaRegister"
                          />
                          Sử dụng tài khoản facebook/google
                        </label>
                      </div>
                    </div>
                    <div
                      class="row"
                      style="margin-bottom:10px;display: none"
                      id="SocialMedia"
                    >
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <label>Tài khoản facebook:</label>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          name="socialid"
                          id="socialid"
                          class="form-control"
                        />
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          name="socialtype"
                          id="socialtype"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="row" style="margin-bottom:10px;">
                      <div class="col-xs-12">
                        <hr />
                      </div>
                      <div class="col-md-12 col-sm-23 col-xs-12 ">
                        <button
                          type="button"
                          class="loginBtn loginBtn--facebook"
                          onclick="window.location.href='/Account/Facebook';"
                        >
                          Sử dụng ID Facebook
                        </button>
                        <button
                          id="googlebtn"
                          type="button"
                          class="loginBtn loginBtn--google"
                          onclick="window.location.href='/Account/Google';"
                        >
                          Sử dụng ID Google
                        </button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12">
                        <hr />
                      </div>
                      <div class="col-md-12 col-sm-23 col-xs-12  mg-bot30">
                        <label class="checkbox-inline">
                          <input
                            class="require-one validate-checkbox-oneormore"
                            type="checkbox"
                            id="chkDieuKhoan"
                            name="chkDieuKhoan"
                            data-val="true"
                            data-val-required="Please agree to our policy!"
                          />
                          Tôi đã đọc và đồng ý các điều khoản bên dưới
                        </label>
                        <div
                          class="field-validation-valid text-danger"
                          data-valmsg-for="chkDieuKhoan"
                          data-valmsg-replace="true"
                        ></div>
                      </div>
                      <div class="col-md-12 col-sm-12 col-xs-12 mg-bot15 text-right">
                        <button
                          id="btCapNhat"
                          class="btn btn-md btn-default"
                          type="button"
                          onclick="CheckValidate();"
                        >
                          Đăng ký
                        </button>
                      </div>
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
