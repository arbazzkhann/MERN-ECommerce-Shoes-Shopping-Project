import React, { useState } from 'react'

const InputForm = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isSignup, setIsSignUp ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <p onClick={() => {setIsSignUp(prev => !prev)}} className="link-text">{isSignup && "Already have an account"}{!isSignup && "Create new account"}</p>
                </div>
            </form>
        </>

    );
}

export default InputForm