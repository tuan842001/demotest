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
            <div class="header_content">
              <div class="header_content_inner">
                <div class="header_title">Tour ngoài nước</div>
                <div class="header_breadcrumbs">
                  <ul class="header_breadcrumbs_list">
                    <li class="header_breadcrumb"></li>
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
