import "./top.css";
import Posts from "../../components/posts/Posts";

export default function Top() {
  return (
    <div className="tops">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="sectionTitle">
              <h2>DU LỊCH NƯỚC NGOÀI</h2>
              <div></div>
            </div>
          </div>
        </div>
        <div className="row top_content">
          <div className="col-lg-4 col-md-6 top_col">
            <div className="top-item">
              <Posts />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 top_col">
            <div className="top-item">
              <Posts />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 top_col">
            <div className="top-item">
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
