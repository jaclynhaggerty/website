import { useState } from "react";
import axios from "axios";


const Login = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        const user = await axios.post(
            'http://localhost:4000/users',
            {
                name,
                email,
                password
            }
        )
        if (!user) {
            console.log("Unable to create user! Please try again.")
        }
        else {
            props.setUser(user);
            // How to navigate to home page?
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
  };

  export default Login;