import { Container } from ".";
import { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const API = process.env.NEXT_PUBLIC_URL;

const Verification = () => {
  const [certificateURL, setcertificateURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const verifyCertificate = async () => {
    setError("");
    const cid = document.querySelector("input").value;
    if (!cid) {
      alert("Enter a certificate ID!");
      return;
    }
    setLoading(true);
    await axios
      .get(`${API}/api/certificate?cid=${cid}`)
      .then((res) => {
        setcertificateURL(res.data.driveURL);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <Container
      className={"mb-44"}
      style={{ marginTop: "100px", minHeight: "60vh" }}
    >
      <center>
        <h2 className="text-2xl font-bold text-center mb-5" id="event">
          Verify certificates
        </h2>
      </center>
      <hr />
      <div>
        <center className="text-md text-center mb-5 mt-5">
          <input
            required
            maxLength={32}
            placeholder="Enter certificate ID"
            style={{
              padding: "1vh 2vw",
              borderRadius: "3px",
              textAlign: "center",
              width: "80%",
              fontSize: "1.2rem",
              color: "black",
              fontFamily: "monospace",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") verifyCertificate();
            }}
          ></input>
          <br />
          <button
            style={{
              marginTop: "2vh",
              border: "1px solid black",
              padding: "1vh 2vw",
              borderRadius: "3px",
            }}
            onClick={verifyCertificate}
          >
            VERIFY
          </button>
        </center>
        <center>{loading && <ClipLoader color="#000" />}</center>
        <center>
          {error && (
            <div>
              <p className="text-red-500 font-bold">{error}</p>
            </div>
          )}
        </center>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2vh",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          {certificateURL && !error && (
            <iframe
              onLoadStart={() => setLoading(true)}
              onLoad={() => setLoading(false)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
              src={certificateURL}
              allow="autoplay"
            ></iframe>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Verification;
