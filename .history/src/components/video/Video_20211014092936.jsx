import "./video.css";

export default function Video() {
  return (
    <div className="video">
      <div
        className="videobackground"
        data-image-scr="./assets/images/video.jpg"
      ></div>
      <img src="./assets/images/video.jpg" alt="" />
    </div>
  );
}
