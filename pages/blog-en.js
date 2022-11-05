import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import BlogCard from "../components/BlogCard";
import axios from "axios";

import config from "../config";

const MAX_PAGES = 1;

export default function News({ posts, authors }) {
  const postComponents = [];

  for (let i = 0; i < Math.ceil(posts.length / 3); i++) {
    const startIndex = i * 3;
    const endIndex = (i + 1) * 3;

    const cols = [];

    for (let j = startIndex; j < endIndex; j++) {
      const post = posts[j];

      if (post) {
        cols.push(
          <div key={`blog-col-${j}`} className="col col-12 col-sm-4">
            <BlogCard key={`post-${post.id}`} post={post} author={authors[post.author]} lang="en" />
          </div>
        );
      } else {
        cols.push(<div key={`blog-col-${j}`} className="col col-12 col-sm-4"></div>);
      }
    }

    postComponents.push(
      <div key={`blog-row-${i + 1}`} className="row mb-4 g-4">
        {cols}
      </div>
    );
  }

  if (!postComponents.length) {
    postComponents.push(<p>There are no new updates available!</p>);
  }

  const { t } = useTranslation("strings");

  return (
    <>
      <Head>
        <title>{t("blog")}</title>
        <meta name="viewport" content="width=1024"></meta>
      </Head>

      <div className="blog">
        <h1 className="text-uppercase">{t("blog")}</h1>
        {postComponents}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = [];

  for (let i = 0; i < MAX_PAGES; i++) {
    try {
      const { data } = await axios.get(`http://wordpress.cpplus.pw/index.php/wp-json/wp/v2/posts?_embed`);

      posts.push(...data);
    } catch (err) {
      break;
    }
  }

  const promises = [];
  const authors = {};

  posts.forEach((post) => {
    const { author: authorId } = post;

    if (!authors[authorId]) {
      authors[authorId] = {};

      promises.push(axios.get(`http://wordpress.cpplus.pw/index.php/wp-json/wp/v2/users/${authorId}`));
    }
  });

  const resolvedAuthors = await Promise.all(promises);

  resolvedAuthors.forEach((author) => {
    const { data } = author;
    const { id } = data;

    authors[id] = data;
  });

  return {
    props: {
      posts: posts,
      authors,
    },
    revalidate: 300,
  };
}
