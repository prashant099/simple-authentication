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
                    vlue={inputName}
                    type="text"
                    placeholder="name"
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Username</label>
                  <input
                    vlue={inputUsername}
                    type="text"
                    placeholder="username"
                    onChange={(e) => setInputUsername(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    vlue={inputPassword}
                    type="password"
                    placeholder="password"
                    onChange={(e) => setInputPassword(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Button color="teal" onClick={(e) => onRegister(e)}>
                    Register
                  </Button>
                  <Button color="red">Reset</Button>
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
