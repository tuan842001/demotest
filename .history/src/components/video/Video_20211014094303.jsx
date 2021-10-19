import "./video.css";

export default function Video() {
  return (
    <div className="video">
      <img className="videoBackground" src="./assets/images/video.jpg" alt="" />
      <div className="videoContent">
        <div className="videoTitle">Một ngày trên đảo</div>
        <div className="videoSubtitle">
          Chuyến đi do nhóm Averio Travel tổ chức
        </div>
        <div className="videoPlay">
          <a href="https://www.youtube.com/watch?v=1La4QzGeaaQ"></a>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="140px"
            height="140px"
            viewBox="0 0 140 140"
            enable-background="new 0 0 140 140"
            xml:space="preserve"
          >
            <g id="Layer_2">
              <circle
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-miterlimit="10"
                cx="70.333"
                cy="69.58"
                r="68.542"
              />
              <polygon
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-miterlimit="10"
                points="61.583,56 61.583,84.417 84.75,70 	"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
