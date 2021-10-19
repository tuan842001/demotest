import "./siderbar.css";

export default function Siderbar() {
  return (
    <div className="siderbar">
      <div className="siderbarImg">
        <span className="siderbarTitle">ABOUT ME</span>
        <img
          src="https://nichetravel.com.vn/wp-content/uploads/2020/08/travel-world.jpg"
          alt=""
        />
        <p>
          This is your About page. This space is a great opportunity to give a
          full background on who you are, what you do and what your site has to
          offer. Your users are genuinely interested in learning more about you,
          so don’t be afraid to share personal anecdotes to create a more
          friendly quality. If you’re a business, talk about how you started and
          share your professional journey. Explain your core values, your
          commitment to customers and how you stand out from the crowd. Add a
          photo, gallery or video for even more engagement.
        </p>
      </div>
    </div>
  );
}
