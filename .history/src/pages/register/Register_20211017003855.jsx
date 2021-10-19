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
                <div className="col-lg-12 col-md-12 noidungtin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
