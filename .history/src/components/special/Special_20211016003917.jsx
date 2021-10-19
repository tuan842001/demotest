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
				<div class="special_slider_container">
					<div class="owl-carousel owl-theme special_slider">
						{/* <!-- Special Offers Item --> */}
						<div class="owl-item">
							<div class="special_item">
								<div class="special_item_background"><img src="view/images/special_1.jpg" ></div>
								<div class="special_item_content text-center">
									<div class="special_category">Visiting</div>
									<div class="special_title"><a href="">Indonesia</a></div>
								</div>
							</div>
						</div>

						{/* <!-- Special Offers Item --> */}
						<div class="owl-item">
							<div class="special_item d-flex flex-column align-items-center justify-content-center">
								<div class="special_item_background"><img src="view/images/special_2.jpg"></div>
								<div class="special_item_content text-center">
									<div class="special_category">Culture</div>
									<div class="special_title"><a href="">India</a></div>
								</div>
							</div>
						</div>

						{/* <!-- Special Offers Item --> */}
						<div class="owl-item">
							<div class="special_item d-flex flex-column align-items-center justify-content-center">
								<div class="special_item_background"><img src="view/images/special_3.jpg" ></div>
								<div class="special_item_content text-center">
									<div class="special_category">Sunbathing</div>
									<div class="special_title"><a href="">Thailand</a></div>
								</div>
							</div>
						</div>

						{/* <!-- Special Offers Item --> */}
						<div class="owl-item">
							<div class="special_item d-flex flex-column align-items-center justify-content-center">
								<div class="special_item_background"><img src="view/images/special_4.jpg"></div>
								<div class="special_item_content text-center">
									<div class="special_category">Visiting</div>
									<div class="special_title"><a href="">Bali</a></div>
								</div>
							</div>
						</div>

						{/* <!-- Special Offers Item --> */}
						<div class="owl-item">
							<div class="special_item d-flex flex-column align-items-center justify-content-center">
								<div class="special_item_background"><img src="view/images/special_5.jpg"></div>
								<div class="special_item_content text-center">
									<div class="special_category">Visiting</div>
									<div class="special_title"><a href="">France</a></div>
								</div>
							</div>
						</div>

					</div>

					<div class="special_slider_nav d-flex flex-column align-items-center justify-content-center">
						<img src="view/images/special_slider.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
  );
}
