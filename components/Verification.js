import { Container } from ".";
import { useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_URL;

const Verification = () => {
  const [certificateURL, setcertificateURL] = useState("");
  const verifyCertificate = () => {
    const cid = document.querySelector("input").value;
    if (cid === "") return setErrorStack("Invalid certificate ID!");
    axios
      .get(`${API}/api/certificate?cid=${cid}`)
      .then((res) => {
        setcertificateURL(res.data.driveURL);
      })
      .catch((err) => {
        alert("Certificate not found, please check the ID again!");
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2vh",
          }}
        >
          <div>
            {certificateURL && (
              <iframe
                src={certificateURL}
                width="640"
                height="480"
                allow="autoplay"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Verification;
