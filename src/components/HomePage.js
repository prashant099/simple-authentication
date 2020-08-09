import React from "react";
import { Container, Button } from "semantic-ui-react";

const HomePage = ({ onRouteChange, user }) => {
  return (
    <Container>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "75vw",
        }}
      >
        <Button as="a" color="violet" onClick={() => onRouteChange("login")}>
          Sign Out
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "75vw",
          height: "75vh",
        }}
      >
        <h1>Welcome to Home Page {user.name}</h1>
      </div>
    </Container>
  );
};

export default HomePage;
