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
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 noidungtin">
                  <div className="loginForm">
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
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>
                            Họ tên <span style={{ color: "red" }}>(*)</span>:
                          </span>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                          <input
                            type="text"
                            name="Birthday"
                            id="Birthday"
                            class="form-control"
                            data-val="true"
                            data-val-required="Vui lòng nhập Họ tên"
                            autocomplete="off"
                          />
                          <div
                            class="field-validation-valid text-danger"
                            data-valmsg-for="Birthday"
                            data-valmsg-replace="true"
                          ></div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>
                            Giới tính <span style={{ color: "red" }}>(*)</span>:
                          </span>
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
                      </div>
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>
                            Ngày sinh <span style={{ color: "red" }}>(*)</span>:
                          </span>
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
                          <span>
                            Di động <span style={{ color: "red" }}>(*)</span>:
                          </span>
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
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>CMND:</span>
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
                          <span>Ngày cấp :</span>
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
                      {/* <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>Passport:</span>
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
                          <span>
                            Email <span style={{ color: "red" }}>(*)</span>:
                          </span>
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
                      </div> */}
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>Ngày cấp:</span>
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
                          <span>Ngày hết hạn:</span>
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
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>
                            Quốc gia <span style={{ color: "red" }}>(*)</span>:
                          </span>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                          <select
                            id="CountryId"
                            name="CountryId"
                            class="form-control valid"
                            onchange="LoadTinhThanh('');"
                          >
                            <option value="TQ">Trung Quốc</option>
                            <option value="TR">Turkey</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TV">Tuvalu</option>
                            <option value="TW">Taiwan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="UA">Ukraine</option>
                            <option value="UEA">United Arab Emirates</option>
                            <option value="UG">Uganda</option>
                            <option value="UM">U.S Minor Island</option>
                            <option value="USA">
                              United States of America
                            </option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VA">Vatican City State</option>
                            <option value="VC">
                              Saint Vincent And The Grenadines
                            </option>
                            <option value="VE">Venezuala</option>
                            <option value="VG">Virgin Island (British)</option>
                            <option value="VI">Virgin Island (U.S)</option>
                            <option selected="selected" value="VN">
                              Viet Nam
                            </option>
                            <option value="VU">Vanuatu</option>
                            <option value="WF">Wallis And Futuna Island</option>
                            <option value="WS">Samoa</option>
                            <option value="YE">Yemen</option>
                            <option value="YT">Mayotte</option>
                            <option value="ZA">South Africa</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>
                            Tỉnh/TP <span style={{ color: "red" }}>(*)</span>:
                          </span>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                          <select
                            id="ProvinceId"
                            name="ProvinceId"
                            class="form-control valid"
                            onchange="LoadQuanHuyen('');"
                          >
                            <option value="5f451d79-fc4b-4569-b3d1-fa78adc187b3">
                              An Giang
                            </option>
                            <option value="332a5123-f3f8-4710-9526-140691edea17">
                              Bà Rịa - Vũng Tàu
                            </option>
                            <option value="bd1a0a88-7f78-4f62-bb3d-d09c095d2d6b">
                              Bắc Cạn
                            </option>
                            <option value="475866be-d734-4d0a-a54b-33ab97c2dc93">
                              Bắc Giang
                            </option>
                            <option value="b9ba5121-9916-4639-8e0e-33efd20bc01b">
                              Bạc Liêu
                            </option>
                            <option value="86e1a0a0-c8e7-4092-b042-747c49d3aaea">
                              Bắc Ninh
                            </option>
                            <option value="85fae77b-f2b0-4037-9e0f-79a3393e70cf">
                              Bến Tre
                            </option>
                            <option value="20915c37-95a9-47b9-a796-02a74de556fc">
                              Bình Định
                            </option>
                            <option value="65e18960-d080-403a-8f30-aae7af47930a">
                              Bình Dương
                            </option>
                            <option value="682753d8-e985-4375-8fe6-18a1bb9dcb31">
                              Bình Phước
                            </option>
                            <option value="064844ef-5bc4-4b2a-9168-461a5ccbddeb">
                              Bình Thuận
                            </option>
                            <option value="b7ea1002-0ec5-4c88-be5d-3326408ad7e4">
                              Cà Mau
                            </option>
                            <option value="99faba2a-fcc5-4a00-b97f-67fa3bb5c4f4">
                              Cần Thơ
                            </option>
                            <option value="4f98446d-d69f-458b-b87f-c6b9db6a5d38">
                              Cao Bằng
                            </option>
                            <option value="c704a1a3-be74-455a-b904-10c3c0ff3c3e">
                              Đà Lạt
                            </option>
                            <option value="5f4520e7-c63b-4c57-b417-d91091c2093a">
                              Đà Nẵng
                            </option>
                            <option value="27c6682f-c691-45e4-99b2-3c58ca24b5aa">
                              Đắk Lắk
                            </option>
                            <option value="5cc99b24-d2f9-4e38-8ee6-5b19159a4a3d">
                              Đắk Nông
                            </option>
                            <option value="8bbe6159-4460-431f-9da1-bd7d1f29afc5">
                              Điện Biên
                            </option>
                            <option value="ac91dfcc-3b79-4f5f-8c91-9c64731acee5">
                              Đồng Nai
                            </option>
                            <option value="7ee6a48a-51fe-40ef-ab42-cbb693c73c0d">
                              Đồng Tháp
                            </option>
                            <option value="a6d7dba7-ee6c-4319-b068-cb019ee2faca">
                              Gia Lai
                            </option>
                            <option value="162ebfb2-bfd8-40a1-b170-cfdb192c8015">
                              Hà Bắc
                            </option>
                            <option value="cacc6309-2ba1-4997-b415-f89a184ff2e2">
                              Hà Giang
                            </option>
                            <option value="e1c0aaca-911e-4d79-aab5-3520002cad67">
                              Hạ Long
                            </option>
                            <option value="15ca14bc-e0fe-454e-82af-9157a8715b1f">
                              Hà Nam
                            </option>
                            <option value="c5fe8aff-4c66-4907-954d-a3d9577cfd09">
                              Hà Nội
                            </option>
                            <option value="3bbf16ad-5c91-41c4-879e-1660dae60ed8">
                              Hà Tây
                            </option>
                            <option value="9854121c-3454-4b7b-a8e4-dacde80ac6b0">
                              Hà Tiên
                            </option>
                            <option value="2ec66fe1-8de7-4c49-abc1-16ead51c4423">
                              Hà Tĩnh
                            </option>
                            <option value="615048b8-3ebb-4ea3-ab57-c120d961459b">
                              Hải Dương
                            </option>
                            <option value="30fd906d-bbb2-47a5-82bc-7c9d5684bb88">
                              Hải Phòng
                            </option>
                            <option value="64eb29e6-aed7-4876-aab0-93d157601062">
                              Hậu Giang
                            </option>
                            <option value="76002619-5294-4ab4-a219-3be78868d550">
                              Hoà Bình
                            </option>
                            <option value="825ca4ef-452e-48ba-be6a-1ff11519db98">
                              Huế
                            </option>
                            <option value="d9efa23a-a991-4d37-9b07-a262c732df90">
                              Hưng Yên
                            </option>
                            <option value="b584f16c-8dd4-48b8-9164-0ae324380dd0">
                              Khánh Hòa
                            </option>
                            <option value="8137f0bf-8151-4fe3-809e-0fc4e91e3de7">
                              Kiên Giang
                            </option>
                            <option value="79fff2ae-c3df-4044-be83-284013477a07">
                              Kon Tum
                            </option>
                            <option value="ddb6abcc-8f5f-4443-8dcb-0a95453ed926">
                              Lai Châu
                            </option>
                            <option value="5588580e-8662-4598-b51e-9c1057bd065c">
                              Lâm Đồng
                            </option>
                            <option value="0d454c8b-70e2-4cb3-9a90-c88564d05508">
                              Lạng Sơn
                            </option>
                            <option value="fdfb5f4c-6919-4d81-9fd2-c56be90a57f4">
                              Lào Cai
                            </option>
                            <option value="50a18de1-c425-4874-a85f-bd23dc76a394">
                              Long An
                            </option>
                            <option value="0e1787bc-bdd6-4e14-a2d0-569abe01651f">
                              Nam Định
                            </option>
                            <option value="8e90a3bc-9d42-4f33-a2fc-33a9e218e814">
                              Nghệ An
                            </option>
                            <option value="2ba10470-dd7d-42ff-8e23-37430c19e801">
                              Ninh Bình
                            </option>
                            <option value="e68a2c40-095a-4cf3-a3ec-3c9c1af2de25">
                              Ninh Thuận
                            </option>
                            <option value="55837ba0-6a83-4010-ae1e-91e1e522ccb8">
                              Phú Quốc
                            </option>
                            <option value="60e66f73-241a-41ad-8b6b-3763ca9e0526">
                              Phú Thọ
                            </option>
                            <option value="5e4f05c1-d47a-4960-8c9d-d8e17b81b7d7">
                              Phú Yên
                            </option>
                            <option value="a51cccff-021d-4263-9aca-eb25d5bf0c16">
                              Quảng Bình
                            </option>
                            <option value="78327897-79b0-4226-8e9e-cf1288cfbde3">
                              Quảng Nam
                            </option>
                            <option value="6ca1ad59-801a-4a44-b0bf-f19051e70c82">
                              Quảng Ngãi
                            </option>
                            <option value="e0f8e055-aecd-4a3a-a22b-2bd236de12fe">
                              Quảng Ninh
                            </option>
                            <option value="64e253f2-391d-4eb6-95ea-7d18d3cc3cab">
                              Quảng Trị
                            </option>
                            <option value="aafe978d-81da-463a-ae08-fe79ce33be67">
                              Rạch Giá
                            </option>
                            <option value="7f8f443e-9f45-42c5-9aec-1a0272b0264b">
                              Sóc Trăng
                            </option>
                            <option value="d1e70950-fb48-459a-9a56-956073ee8bfa">
                              Sơn La
                            </option>
                            <option value="cca87935-5033-4845-b570-112be4c001ea">
                              Tây Ninh
                            </option>
                            <option value="ef2d6ac5-fbe5-48c3-a6c5-25e39fad27b5">
                              Thái Bình
                            </option>
                            <option value="55837ba0-6a83-4010-ae1e-91e1e522ccb8">
                              Thái Nguyên
                            </option>
                            <option value="6d910462-7f5e-4272-8c1c-7c84bcaaf03d">
                              Thanh Hoá
                            </option>
                            <option value="33371d95-ad67-4e76-bc04-c8d23cdd3fcf">
                              Tiền Giang
                            </option>
                            <option
                              value="ce934e15-eb2e-454c-8235-2d5bef57a855"
                              selected="selected"
                            >
                              Tp. HCM
                            </option>
                            <option value="fa715535-a149-489c-bb68-85a954c6454c">
                              Trà Vinh
                            </option>
                            <option value="3706319d-296d-4130-9f4d-899393521007">
                              Trường Sa
                            </option>
                            <option value="9e274bbf-621f-4656-b902-636a8699a75c">
                              Tuyên Quang
                            </option>
                            <option value="a671267e-92e7-46a5-9c8e-841ee5aa4a3d">
                              Vĩnh Long
                            </option>
                            <option value="d43f22b2-92a6-4e3c-ad27-38901996b2ae">
                              Vĩnh Phúc
                            </option>
                            <option value="f7ca90bc-bef8-41dc-9702-265f588f011b">
                              Yên Bái
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-2 col-sm-2 col-xs-12">
                        <span>Quận/Huyện:</span>
                      </div>
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <select
                          id="DistrictId"
                          name="DistrictId"
                          class="form-control valid"
                        >
                          <option value="5ca08427-fe1f-460d-9a7d-342309df9179">
                            Huyện Đại Từ
                          </option>
                          <option value="768b87ea-84d3-4c30-8496-6d12e1600d50">
                            Huyện Định Hóa
                          </option>
                          <option value="603de510-5d37-4649-afb6-5217065da33b">
                            Huyện Đồng Hỷ
                          </option>
                          <option value="54afa392-3a2b-4f08-9e62-2f2954587227">
                            Huyện Phổ Yên
                          </option>
                          <option value="0b56e967-e140-4710-87ad-4952089e1775">
                            Huyện Phú Bình
                          </option>
                          <option value="dc4a5e2a-2ac4-4ef3-84bf-0bab5d690915">
                            Huyện Phú Lương
                          </option>
                          <option value="fa90738f-2f25-4096-a2d5-36b8d3b4c6d1">
                            Huyện Võ Nhai
                          </option>
                          <option value="528e8213-8dc1-41f2-bc12-1dac85d3650e">
                            TP.Thái Nguyên
                          </option>
                          <option value="5bace117-0fe3-4e1b-be34-6b0ef1819557">
                            Bình Chánh
                          </option>
                          <option value="fc1c0778-779e-4f35-9eaa-ab89934bb030">
                            Huyện Cần Giờ
                          </option>
                          <option value="9dbeb6fa-b9bb-4094-b2e2-f7737dc52ca1">
                            Huyện Củ Chi
                          </option>
                          <option value="e870a962-72f3-4e4f-8386-135509129ada">
                            Huyện Hóc Môn
                          </option>
                          <option value="a4e66362-ed89-4c88-b713-084e4fd344c9">
                            Huyện Nhà Bè
                          </option>
                          <option value="399bed80-ae98-433b-a135-ac5c92542938">
                            Quận 1
                          </option>
                          <option value="406b573f-7104-4985-8123-22313f0d6627">
                            Quận 10
                          </option>
                          <option value="4e6312a6-49ac-49de-b276-b78a5d1a1ed2">
                            Quận 11
                          </option>
                          <option value="7cecccf0-a134-4ea8-8712-56b9fe999dbd">
                            Quận 12
                          </option>
                          <option value="946d6f09-9e8d-491d-bd75-ef6c8345faeb">
                            Quận 2
                          </option>
                          <option value="74097b51-f661-4367-afe8-6a4fd0b7a900">
                            Quận 3
                          </option>
                          <option value="a7233e6f-8b0f-47d1-8487-d28b91f221f2">
                            Quận 4
                          </option>
                          <option value="3c19bd27-ce24-430e-849c-9ac4cebb2a9f">
                            Quận 5
                          </option>
                          <option value="ed9e7d39-dfb2-495f-bc84-13a1b008eb55">
                            Quận 6
                          </option>
                          <option value="4324b597-f9f6-40bd-8f76-0067e5ba37ae">
                            Quận 7
                          </option>
                          <option value="4bde02a9-a5b6-459a-8302-d63e87a862a8">
                            Quận 8
                          </option>
                          <option value="7907dff2-2c19-493b-bafb-5c98257e382e">
                            Quận 9
                          </option>
                          <option value="1f5931ed-4c8a-42ed-8032-16bf5a9ace70">
                            Quận Bình Tân
                          </option>
                          <option value="2ea40f1a-c857-4951-905f-dbe365b50e30">
                            Quận Bình Thạnh
                          </option>
                          <option value="be97542c-354b-4550-aee9-bbaf153c7e40">
                            Quận Gò Vấp
                          </option>
                          <option value="a9e2cfbf-55e6-434d-a557-7d70de8a34b9">
                            Quận Phú Nhuận
                          </option>
                          <option value="1810df7e-16c5-45c4-a650-e6ebe19fce3e">
                            Quận Tân Bình
                          </option>
                          <option value="0ffae3db-586f-4c3b-acfd-48ff527021b6">
                            Quận Tân Phú
                          </option>
                          <option value="b9282608-bcc4-4450-a5b6-6ad1be3fe592">
                            Quận Thủ Đức
                          </option>
                        </select>
                      </div>
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>
                            Địa chỉ <span style={{ color: "red" }}>(*)</span>:
                          </span>
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
                      <div class="row" style={{ marginBottom: "10px" }}>
                        <div class="col-md-2 col-sm-2 col-xs-12">
                          <span>Mã giới thiệu:</span>
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
                          <span>
                            Mật khẩu <span style={{ color: "red" }}>(*)</span>:
                          </span>
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
                                <i
                                  class="fa fa-eye-slash"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                          <div
                            class="field-validation-valid text-danger"
                            data-valmsg-for="Password"
                            data-valmsg-replace="true"
                          ></div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-12">
                          <hr />
                        </div>
                        <div class="col-md-12 col-sm-23 col-xs-12  mg-bot30">
                          <span class="checkbox-inline">
                            <input
                              class="require-one validate-checkbox-oneormore"
                              type="checkbox"
                              id="chkDieuKhoan"
                              name="chkDieuKhoan"
                              data-val="true"
                              data-val-required="Please agree to our policy!"
                            />
                            Tôi đã đọc và đồng ý các điều khoản bên dưới
                          </span>
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
      </div>
      <Bottombar />
    </>
  );
}
