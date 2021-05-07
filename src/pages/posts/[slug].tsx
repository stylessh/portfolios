import React, { FC } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown/with-html";

import CodeBlock from "@Components/CodeBlock";
import Layout from "@Components/Layout";
import Head from "@Components/Head";

import { getPost } from "@Api/posts";

import { IPost } from "@Interfaces/Post";

type PostProps = {
  post: IPost;
};

const Post: FC<PostProps> = ({ post }) => {
  return (
    <Layout>
      {post.title ? (
        <>
          <Head title={post.title} />
          <div className="container">
            <section className="post" key={post.id}>
              <article className="postHeader">
                <h2 className="postTitle">{post.title}</h2>

                <h3 className="date">
                  {moment(post.published_at).format("LLL")}
                </h3>

                <ul className="tags">
                  {post.tags.map((tag: string, i: number) => (
                    <li key={i}>#{tag}</li>
                  ))}
                </ul>
              </article>

              <article className="postBody markdown-body">
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

export async function getServerSideProps({ params }) {
  const data: IPost = await getPost(params.slug);

  return {
    props: {
      post: data,
    },
  };
}

export default Post;
