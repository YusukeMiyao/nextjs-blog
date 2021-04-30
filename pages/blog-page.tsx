import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import { Card } from "../components/Card";

type Props = {
  posts: PostType[];
};

const Blog = (props: Props) => {
  console.log(props);
  return (
    <Layout title={"Blog"}>
      <div className="flex flex-wrap p-8">
        {props.posts.map((post) => {
          return <Card post={post} />;
        })}
      </div>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return { props: { posts } };
};
