import Post from "../post/Post";
import IntourPost from "../intourPost/IntourPost";
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
