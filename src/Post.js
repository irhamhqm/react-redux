import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchPostAsync } from "./actions";

export default function Post() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPostAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {loading && <div>loading...</div>}
      {(!loading && !error) && (
        <ol>
          {list.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol>
      )}
      {error && <div>unexpected error</div>}
    </div>
  )
}
