import {  useState } from "react";
import axios from "axios";


const Login = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState({})
    const[error, setError] = useState({})

    const requestUser = async ()=>{ 
        try {  
            const user = await axios.post('http://localhost:4000/users',{
            name,
            email,
            password})

            setResponse(user.data)
       
     } catch (error) {
    setError(error)
    }}

    const onSubmit =  (event) => {
       event.preventDefault() //Just to avoid the page from refreshing
      requestUser()
       
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
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
  };

  export default Login;