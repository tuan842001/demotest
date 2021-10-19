import "./special.css";

export default function Special() {
  return (
    <div class="special">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="section_title text-center">
              <h2>Ưu đãi đặc biệt</h2>
              <div>Cùng nhau nhìn lại những nơi này</div>
            </div>
          </div>
        </div>
      </div>
      <div class="special_content">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="assets/images/special_4.jpg"
                class="d-block w-20"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="assets/images/special_4.jpg"
                class="d-block w-20"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="assets/images/special_5.jpg"
                class="d-block w-20"
                alt=""
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
