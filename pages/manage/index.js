import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

import Head from "next/head";
import config from "../../config";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import PenguinCard from "../../components/PenguinCard";
import PenguinStatsCard from "../../components/PenguinStatsCard";
import ManageCard from "../../components/ManageCard";
import BansCard from "../../components/BansCard";
import CodesCard from "../../components/CodesCard";

const PAGE_TITLE = "Manage";

import axios from "axios";

import styles from "../../styles/pages/manage/index.module.scss";

export default function Manage() {
  const { data, status } = useSession({ required: true });
  const [bans, setBans] = useState([]);
  const [codes, setCodes] = useState([]);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [changePasswordMessage, setChangePasswordMessage] = useState(null);
  const [code, setCode] = useState(null);
  const [redeemMessage, setRedeemMessage] = useState(null);

  useEffect(() => {
    const getBans = async () => {
      const { data } = await axios.get("/api/bans");

      if (data) {
        setBans(data);
      }
    };

    const getCodes = async () => {
      const { data } = await axios.get("/api/codes");
      console.log(data);
      if (data) {
        setCodes(data);
      }
    };

    getBans();
    getCodes();
  }, [data]);

  const changePassword = (evt) => {
    setPassword(evt?.target?.value);
  };

  const changeConfirmPassword = (evt) => {
    setConfirmPassword(evt?.target?.value);
  };

  const changeCode = (evt) => {
    setCode(evt?.target?.value);
  };

  const handleUpdatePassword = (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      setChangePasswordMessage("Password does not match the Confirm Password.");

      return false;
    }

    axios
      .post("/api/update-password", { password })
      .then((result) => {
        setChangePasswordMessage("Password has been successfully updated.");
      })
      .catch((err) => {
        let error = "An unknown error occurred. Please try again.";

        if (err?.response?.data?.error) {
          error = err.response.data.error;
        }

        setChangePasswordMessage(error);
      });

    return false;
  };

  const handleRedeem = (evt) => {
    evt.preventDefault();

    axios
      .post("/api/redeem-code", { code })
      .then((result) => {
        setRedeemMessage("Code has been successfully redeemed.");
      })
      .catch((err) => {
        let error = "An unknown error occurred. Please try again.";

        if (err?.response?.data?.error) {
          error = err.response.data.error;
        }

        setRedeemMessage(error);
      });

    return false;
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>
          {PAGE_TITLE} | {config.public.websiteTitle}
        </title>
      </Head>

      <Container customPage className={styles.container}>
        <div className="d-flex flex-row align-items-center mb-2 justify-content-between">
          <h1 className="text-uppercase p-0 m-0">{PAGE_TITLE}</h1>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </a>
        </div>

        <div className="row mb-4 g-4">
          <div className="col-md-6">
            <PenguinCard penguin={data.user} />
          </div>

          <div className="col-md-6">
            <PenguinStatsCard penguin={data.user} />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <ManageCard heading="Change Password">
              <form>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>

                  <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={changePassword} />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input type="password" className="form-control" name="text" placeholder="Confirm Password" value={confirmPassword} onChange={changeConfirmPassword} />
                </div>

                <button type="submit" className="btn btn-dark" onClick={handleUpdatePassword}>
                  Change Password
                </button>

                {changePasswordMessage && (
                  <div className="alert alert-warning mt-3 mb-0" role="alert">
                    {changePasswordMessage}
                  </div>
                )}
              </form>
            </ManageCard>
          </div>

          <div className="col-md-6">
            <ManageCard heading="Redeem Code">
              <form>
                <div className="mb-3">
                  <label htmlFor="code" className="form-label">
                    Code
                  </label>

                  <input type="text" className="form-control" name="code" placeholder="Code" value={code} onChange={changeCode} />
                </div>

                <button type="submit" className="btn btn-dark" onClick={handleRedeem}>
                  Redeem
                </button>

                {redeemMessage && (
                  <div className="alert alert-warning mt-3 mb-0" role="alert">
                    {redeemMessage}
                  </div>
                )}
              </form>
            </ManageCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-sm-12">
            <BansCard bans={bans} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <CodesCard codes={codes} />
          </div>
        </div>
      </Container>
    </>
  );
}
