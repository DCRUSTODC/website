import { Container } from ".";

const Verification = () => {
  const verifyCertificate = () => {
    alert("Certificate verified successfully");
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
            placeholder="Enter certificate ID"
            style={{
              padding: "5px",
              borderRadius: "3px",
              width: "40%",
              color: "black",
              fontFamily: "monospace",
            }}
          ></input>
          <br />
          <button
            style={{
              marginTop: "2vh",
              border: "1px solid black",
              borderRadius: "3px",
            }}
            onClick={verifyCertificate}
          >
            <div style={{ padding: "1vh" }}>Verify</div>
          </button>
        </center>
      </div>
    </Container>
  );
};

export default Verification;
