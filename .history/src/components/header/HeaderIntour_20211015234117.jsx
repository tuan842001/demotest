import "./header.css";

export default function HeaderIntour() {
  return (
    <div className="headerIntour">
      <div className="headerIntourBackground">
        <img src="./assets/images/news_1.jpg" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="home_content">
              <div class="home_content_inner">
                <div class="home_title">Tour ngoài nước</div>
                <div class="home_breadcrumbs">
                  <ul class="home_breadcrumbs_list">
                    <li class="home_breadcrumb">Tour ngoài nước</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
