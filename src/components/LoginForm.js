import React, { useState } from "react";
import {
  Container,
  Segment,
  Card,
  Form,
  Button,
  Label,
} from "semantic-ui-react";

const LoginFrom = ({ onLoginClick, onRouteChange, error }) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    onLoginClick(inputUsername, inputPassword);
  };

  const onResetClick = () => {
    setInputUsername("");
    setInputPassword("");
  };

  return (
    <Container>
      <Segment>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "150px",
            marginBottom: "150px",
          }}
        >
          <Card>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <h1>Login</h1>
              {error.message !== "" ? (
                <h4 style={{ color: "red" }}>{error.message}</h4>
              ) : null}
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input
                    value={inputUsername}
                    type="text"
                    placeholder="username"
                    onChange={(e) => setInputUsername(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    value={inputPassword}
                    type="password"
                    placeholder="password"
                    onChange={(e) => setInputPassword(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Button color="teal" onClick={(e) => onLogin(e)}>
                    Login
                  </Button>
                  <Button color="red" onClick={onResetClick}>
                    Reset
                  </Button>
                </Form.Field>
                <Form.Field>
                  <Label as="a" onClick={() => onRouteChange("register")}>
                    Register
                  </Label>
                </Form.Field>
              </Form>
            </div>
          </Card>
        </div>
      </Segment>
    </Container>
  );
};

export default LoginFrom;
