import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  const requestUser = async () => {
    try {
      const user = await axios.post("http://localhost:4000/users", {
        name,
        email,
        password,
      });

      setResponse(user.data);
    } catch (error) {
      setError(error);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault(); //Just to avoid the page from refreshing
    requestUser();
  };

  return (
    <div
      className="around"
      style={{ background: "Lavender", marginRight: 250, marginLeft: 250 }}
    >
      <div className="login">
        <h2 style={{ paddingTop: 20 }}> Signin </h2>
        <p style={{ color: "grey" }}>
          {" "}
          please login using account detail bellow.
        </p>
        <form onSubmit={onSubmit}>
          <div>
            <label style={{ color: "grey", lineHeight: 5 }}>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label style={{ color: "grey", lineHeight: 5 }}>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label style={{ color: "grey", lineHeight: 5 }}>
              Password:
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              value="Submit"
              style={{
                paddingRight: 70,
                paddingLeft: 70,
                color: "white",
                background: "DeepPink",
              }}
            >
              Signin
            </button>
          </div>
        </form>
        <p style={{ color: "grey", lineHeight: 5 }}>
          {" "}
          Don't have an account? Create account.{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
