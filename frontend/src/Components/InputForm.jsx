import React, { useState } from 'react'
import axios from "axios";

const InputForm = ({setIsOpen}) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isSignup, setIsSignUp ] = useState(false);
    const [ error, setError ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        let endPoint = (isSignup) ? "signup" : "login";

        await axios.post(`http://localhost:5000/api/user/${endPoint}`, {email, password})
        .then(res => {
            localStorage.setItem("token", res.data.token);
            // localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("_id", JSON.stringify(res.data.user._id));
            localStorage.setItem("email", JSON.stringify(res.data.user.email));
            setIsOpen();
        })
        .catch(data => {
            setError(data.response?.data?.message)
        })
    }

    return (
        <>  
            <h1>{isSignup && "Signup"}{!isSignup && "Login"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="input"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn-primary">{isSignup && "Signup"}{!isSignup && "Login"}</button>
                    { (error != "") && <h6 className="error">{error}</h6> }
                    <p onClick={() => {setIsSignUp(prev => !prev)}} className="link-text">{isSignup && "Already have an account"}{!isSignup && "Create new account"}</p>
                </div>
            </form>
        </>

    );
}

export default InputForm