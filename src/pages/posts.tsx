import moment from "moment";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

import Head from "@Components/Head";
import Layout from "@Components/Layout";

import { getPosts, getPostsNum } from "@Api/posts";
import { IPost } from "@Interfaces/Post";

import styles from "@Styles/ViewPosts.module.scss";
import { FC, useEffect, useState } from "react";

type PostsProps = {
  data: IPost[];
  postsLength: number;
};

const ViewPosts: FC<PostsProps> = ({ data, postsLength }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  // const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setPosts(data);
  }, []);

  const loadMorePost = async () => {
    const newPosts: IPost[] = await getPosts(posts.length);

    setPosts([...posts, ...newPosts]);
  };

  return (
    <Layout>
      <Head title="Posts" />
      <main className={styles.posts}>
        <InfiniteScroll
          dataLength={postsLength}
          hasMore={posts.length < postsLength}
          next={loadMorePost}
          loader={<p style={{ textAlign: "center" }}>Loading...</p>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {posts.length > 0
            ? posts.map((post) => (
                <section className={styles.post} key={post.id}>
                  <article className={styles.postHeader}>
                    <Link href={`/posts/${post.slug}`}>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                    </Link>

                    <h3 className={styles.date}>
                      {moment(post.published_at).format("LLL")}
                    </h3>

                    <ul className={styles.tags}>
                      {post.tags.map((tag, i) => (
                        <li key={i}>#{tag}</li>
                      ))}
                    </ul>
                  </article>
                </section>
              ))
            : null}
        </InfiniteScroll>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const data: IPost[] = await getPosts();
  const postsLength: number = await getPostsNum();

  return {
    props: { data, postsLength },
  };
}

export default ViewPosts;
