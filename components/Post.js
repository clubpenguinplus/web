import { stripHtml } from "string-strip-html";
import dayjs from "dayjs";

import Image from "next/image";

import cn from "classnames";

import styles from "../styles/components/post.module.scss";

import ChevronLeftIcon from "../assets/icons/chevron-left-icon.svg";

const Post = ({ post, author }) => {
  const { title, date: dateStr, content, _embedded: embedded } = post;
  const { simple_local_avatar: localAvatar } = author;

  const date = dayjs(dateStr);

  const humanDate = date.format("MMMM D, YYYY");

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
    <div className={styles.post}>
      <div className={styles.header}>
        <img className={styles.featuredImage} src={mediaUrl} alt="Featured Image" />
        <div className={styles.meta}>
          <div className={styles.left}>
            <img src={avatarUrl} className={styles.avatar} alt="Avatar" width="48" height="48" />
          </div>

          <div className={styles.right}>
            <div className={styles.author}>{author.name}</div>
            <div className={styles.date}>{humanDate}</div>
          </div>
        </div>
        <a href="/pt/blog-pt" className={styles.backLink}>
          <Image src={ChevronLeftIcon} width={12} height={12} className={styles.svg} /> <span className={styles.label}>Go Back</span>
        </a>
      </div>

      <div className={cn(styles.body, "p-4")}>
        <h1 className={styles.title}>{safeTitle}</h1>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </div>
  );
};

export default Post;
