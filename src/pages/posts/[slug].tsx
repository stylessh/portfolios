import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown/with-html";
import { useRouter } from "next/router";

import NProgress from "nprogress";

import CodeBlock from "@Components/CodeBlock";
import Layout from "@Components/Layout";
import Head from "@Components/Head";

import { getPost } from "@Api/posts";

import { IPost } from "@Interfaces/Post";

import styles from "@Styles/Post.module.scss";

const Post: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<IPost>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const data: IPost = await getPost(slug);

      setPost(data);
    };

    setLoading(true);

    getData();

    setLoading(false);
  }, []);

  loading ? NProgress.start() : null;

  return (
    <Layout>
      {post.title ? (
        <>
          <Head title={post.title} />
          <div className={styles.container}>
            <section className={styles.post} key={post.id}>
              <article className={styles.postHeader}>
                <h2 className={styles.postTitle}>{post.title}</h2>

                <h3 className={styles.date}>
                  {moment(post.published_at).format("LLL")}
                </h3>

                <ul className={styles.tags}>
                  {post.tags.map((tag, i: number) => (
                    <li key={i}>#{tag}</li>
                  ))}
                </ul>
              </article>

              <article className={`${styles.postBody} markdown-body`}>
                <ReactMarkdown
                  source={post.content}
                  escapeHtml={false}
                  renderers={{ code: CodeBlock }}
                />
              </article>
            </section>
          </div>
        </>
      ) : null}
    </Layout>
  );
};

export async function getServerSideProps() {
  return { props: {} };
}

export default Post;
