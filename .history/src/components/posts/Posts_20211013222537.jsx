import Post from "../post/Post";
import PoIntourPostst from "../intourpost/IntourPost";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <IntourPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
