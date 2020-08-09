import React, { useState } from "react";
import { Container, Segment, Card, Form, Button } from "semantic-ui-react";

const RegisterForm = ({ onRegisterClick, error }) => {
  const [inputName, setInputName] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const onRegister = (e) => {
    e.preventDefault();
    onRegisterClick(inputName, inputUsername, inputPassword);
  };

  const onResetClick = () => {
    setInputName("");
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
              <h1>Register</h1>
              {error.message !== "" ? (
                <h4 style={{ color: "red" }}>{error.message}</h4>
              ) : null}
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input
                    value={inputName}
                    type="text"
                    placeholder="name"
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </Form.Field>
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
                  <Button color="teal" onClick={(e) => onRegister(e)}>
                    Register
                  </Button>
                  <Button color="red" onClick={onResetClick}>
                    Reset
                  </Button>
                </Form.Field>
              </Form>
            </div>
          </Card>
        </div>
      </Segment>
    </Container>
  );
};

export default RegisterForm;
