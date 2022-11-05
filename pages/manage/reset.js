import { useState } from "react";
import { getCsrfToken } from "next-auth/react";
import Head from "next/head";
import Container from "../../components/Container";
import config from "../../config";

import styles from "../../styles/pages/manage/reset.module.scss";

import axios from "axios";

const PAGE_TITLE = "Reset Password";

export default function Reset({ csrfToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const changeUsername = (evt) => {
    setUsername(evt?.target?.value);
  };

  const changeEmail = (evt) => {
    setEmail(evt?.target?.value);
  };

  const handleClick = (evt) => {
    axios
      .post("/api/reset-password", { username, email })
      .then((result) => {
        setMessage("If an account exists with the provided username and email address, then an email will be sent with instructions to login.");
      })
      .catch((err) => {
        setMessage("An error occurred. Please try again.");
      });

    evt.preventDefault();

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
        <div className={styles.reset}>
          <h1 className="text-uppercase">{PAGE_TITLE}</h1>

          <form>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Penguin Name
              </label>

              <input type="text" className="form-control" name="username" placeholder="Penguin Username" value={username} onChange={changeUsername} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="text" className="form-control" name="text" placeholder="Email Address" value={email} onChange={changeEmail} />
            </div>

            <button type="submit" className="btn btn-dark" onClick={handleClick}>
              Reset Password
            </button>

            {message && (
              <div className="alert alert-warning mt-3 mb-0" role="alert">
                {message}
              </div>
            )}
          </form>

          <div className="pt-5 text-center">
            <a href="/manage/login">Back to Login</a>
          </div>
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
