import "./siderbar.css";

export default function Siderbar() {
  return (
    <div className="siderbar">
      <div className="siderbarImg">
        <span className="siderbarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/244525045_5138312966198325_8296073912355751325_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=0ozmqyAHdrMAX_O9kfr&_nc_ht=scontent.fhan2-4.fna&oh=69a99a0ac536d8d6d8dd398b3924e907&oe=618BC834"
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
