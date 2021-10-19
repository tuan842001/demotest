import "./login.css";
import Bottombar from "../../components/bottombar/Bottombar";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="loginImg">
          <img src="./assets/images/register.jpeg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="loginContent">
                <div className="loginContentInner">
                  <div className="LoginTitle"></div>
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
