import { authService} from "fbase";
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";



const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const toggleAccount = () => setNewAccount((prev) => !prev); // 토글버튼


    const onChange = (event) => {
    const {
        target: { name, value },
    } = event;
    if (name === "email") {
        setEmail(value);
    } else if (name === "password") {
        setPassword(value);
    }
};

const onSubmit = async (event) => {
    event.preventDefault(); // 새로고침 방지코드
    try {
        let data;
    if (newAccount) {
        // create new Account
        data = await createUserWithEmailAndPassword(
            authService,
            email,
            password
          );
    } else {
        // log in
        data = await signInWithEmailAndPassword(
            authService,
            email,
            password
          );
    }
} catch (error) {
   setError(error.message);
}
};

return (
    <>
    <form onSubmit={onSubmit} className="container">
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                    className="authInput"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                    className="authInput"
                />
                <input
                  type="submit"
                  value={newAccount ? "Create Account" : "Log In"}
                  className="authInput"
                />
                
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">
                {newAccount ? "Sign In" : "Create Account"}
            </span>
    </>
    );
};

export default AuthForm;
