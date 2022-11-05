import { getCsrfToken } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import config from "../../config";

import cn from "classnames";

import styles from "../../styles/pages/manage/login.module.scss";

const PAGE_TITLE = "Login";

export default function Login({ csrfToken }) {
  const { query, push } = useRouter();

  let error = null;

  if (query.error) {
    error = "An error has occurred. Please try again.";

    if (query.error === "CredentialsSignin") {
      error = "Incorrect username or password. NOTE: Passwords are CaSe SeNsiTIVE.";
    }

    if (query.error === "SessionRequired") {
      error = "Please login to continue.";
    }
  }

  const handleForgotPassword = (evt) => {
    evt.preventDefault();

    push("/manage/reset");

    return false;
  };

  return (
    <>
      <Head>
        <title>
          {PAGE_TITLE} | {config.public.websiteTitle}
        </title>
      </Head>

      <Container className={styles.container}>
        <div className={styles.login}>
          <h1 className="text-uppercase">{PAGE_TITLE}</h1>

          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" name="username" placeholder="Penguin Username" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" name="password" placeholder="Penguin Password" />
            </div>

            <button type="submit" className="btn btn-dark">
              Login
            </button>

            <button type="submit" className={cn(styles.btnLink, "btn", "btn-link")} onClick={handleForgotPassword}>
              Forgot Password?
            </button>

            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
          </form>
        </div>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
