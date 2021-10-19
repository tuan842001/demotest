import "./header.css";

export default function Header() {
  return (
    <div className="headerIntour">
      <div class="home">
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
                      <li class="home_breadcrumb">
                        <a href="?page=index">Home</a>
                      </li>
                      <li class="home_breadcrumb">Tour ngoài nước</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
