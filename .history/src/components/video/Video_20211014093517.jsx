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
      </div>
    </div>
  );
}
