import React from "react";
import LoginFrom from "./LoginForm";
import RegisterForm from "./RegisterForm";
import HomePage from "./HomePage";

const users = [
  {
    name: "Prashant",
    username: "sonu",
    password: "123",
  },
];

class App extends React.Component {
  state = {
    currentUser: {},
    route: "login",
    error: {
      type: "",
      message: "",
    },
  };

  onLoginClick = (inputUsername, inputPassword) => {
    if (inputUsername && inputPassword) {
      users.forEach((user) => {
        if (
          user.username === inputUsername &&
          user.password === inputPassword
        ) {
          this.setState({ currentUser: user });
          this.onRouteChange("home");
        }
      });
      this.errorWash();
      this.setState({
        error: { type: "loginError", message: "Invalid Credentials" },
      });
    }
  };

  onRegisterClick = (inputName, inputUsername, inputPassword) => {
    if (inputName && inputUsername && inputPassword) {
      users.push({
        name: inputName,
        username: inputUsername,
        password: inputPassword,
      });
      this.onRouteChange("login");
    } else {
      this.errorWash();
      this.setState({
        error: { type: "registerError", message: "Please fill the fields." },
      });
    }
  };

  onRouteChange = (route) => {
    this.setState({ route });
  };

  errorWash = () => {
    setTimeout(() => {
      this.setState({ error: {} });
    }, 3000);
  };

  render() {
    const { route, error, currentUser } = this.state;
    return (
      <div>
        {route === "login" ? (
          <LoginFrom
            onLoginClick={this.onLoginClick}
            onRouteChange={this.onRouteChange}
            error={error}
          />
        ) : (
          <div>
            {route === "register" ? (
              <RegisterForm
                onRegisterClick={this.onRegisterClick}
                error={error}
              />
            ) : (
              <HomePage onRouteChange={this.onRouteChange} user={currentUser} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
