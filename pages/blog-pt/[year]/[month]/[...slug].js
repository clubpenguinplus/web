import dayjs from "dayjs";
import axios from "axios";

import Head from "next/head";

import { useRouter } from "next/router";

import { stripHtml } from "string-strip-html";

import config from "../../../../config";

import Container from "../../../../components/Container";
import Loading from "../../../../components/Loading";
import Post from "../../../../components/Post";

export default function PostPage({ post, author }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const { result: safeTitle } = stripHtml(post.title.rendered);

  return (
    <>
      <Head>
        <title>
          {safeTitle} | {config.public.websiteTitle}
        </title>
        <meta name="viewport" content="width=1024"></meta>
      </Head>

      <Container customPage>
        <Post post={post} author={author} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  let posts = [];

  try {
    const { data } = await axios.get("http://wordpress-pt.cpplus.pw/index.php/wp-json/wp/v2/posts?_embed");

    posts = data;
  } catch (err) {
    posts = [];
  }

  const paths = posts.map((post) => {
    const { id, slug, date: dateStr } = post;

    const date = dayjs(dateStr);

    const year = date.format("YYYY");
    const month = date.format("MM");

    const actualSlug = [`${slug}-${id}`];

    return {
      params: {
        year,
        month,
        slug: actualSlug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const pieces = slug[0].split("-");
  const id = pieces[pieces.length - 1];

  let post = {};
  let author = {};

  try {
    const { data: postData } = await axios.get("http://wordpress-pt.cpplus.pw/index.php/wp-json/wp/v2/posts/${id}?_embed");

    const { author: authorId } = postData;

    const { data: authorData } = await axios.get("http://wordpress-pt.cpplus.pw/index.php/wp-json/wp/v2/users/${authorId}");

    post = postData;
    author = authorData;
  } catch (err) {
    const errorCode = err.response.status;

    if (errorCode === 404) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {
      post,
      author,
    },
    revalidate: 300,
  };
}
