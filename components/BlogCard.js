import dayjs from "dayjs";

import { stripHtml } from "string-strip-html";

import styles from "../styles/components/blog-card.module.scss";

const BlogCard = ({ post, author, lang }) => {
  const { id, slug, date: dateStr, _embedded: embedded, title } = post;
  const { simple_local_avatar: localAvatar } = author;

  const date = dayjs(dateStr);

  const humanDate = date.format("MMMM D, YYYY");

  const year = date.format("YYYY");
  const month = date.format("MM");

  const url = `/${lang}/blog-${lang}/${year}/${month}/${slug}-${id}`;

  let avatarUrl = author.avatar_urls[48];

  if (localAvatar) {
    avatarUrl = localAvatar[64];
  }

  const { result: safeTitle } = stripHtml(title.rendered);

  let mediaUrl = "/placeholder.jpeg";

  if (embedded["wp:featuredmedia"] && embedded["wp:featuredmedia"].length) {
    mediaUrl = embedded["wp:featuredmedia"][0].source_url;
  }

  return (
    <a href={url} className={styles.card}>
      <div className={styles.header}>
        <img className={styles.featuredImage} src={mediaUrl} alt="Featured Image" />

        <div className={styles.meta}>
          <div>
            <img src={avatarUrl} className={styles.avatar} alt="Avatar" width="48" height="48" />
          </div>

          <div>
            <div className={styles.author}>{author.name}</div>
            <div className={styles.date}>{humanDate}</div>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{safeTitle}</h2>
      </div>
    </a>
  );
};

export default BlogCard;
