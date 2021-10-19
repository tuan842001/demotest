import Header from "../../components/header/Header";
import IntourPost from "../../components/intourPost/IntourPost";
import "./intour.css";

export default function Intour() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Tour trong nước</span>
          <span className="headerTitleLg">Aveiro Travel</span>
        </div>
        <img
          className="headerTitImg"
          src="https://scontent.fhan2-1.fna.fbcdn.net/v/t31.18172-8/18836975_1742898855739770_2923034198161573841_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=TAHD6liDrAwAX-xH0UD&_nc_oc=AQn9mgeMG2G9nJF3b1xnjH0Gy_GTukwdc_nespOYO40Gl4rFWr8DY_8unS_38Y_LJyo&tn=F0DuRFl6wdbl0pBM&_nc_ht=scontent.fhan2-1.fna&oh=aa71ee572dc3106708f34593a43ac2f4&oe=618D623E"
          alt=""
        />
      </div>
      <div className="intour">
        <IntourPost />
      </div>
    </>
  );
}
