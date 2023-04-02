import AuthForm from "components/AuthForm";
import { authService} from "fbase";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
  } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faTwitter,
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {

    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider(); // v6부터 바뀜
        } else if (name === "github") {
            provider = new GithubAuthProvider(); // v6부터 바뀜
        }
        const data = await signInWithPopup(authService, provider);
    };


    return (
        <div className="authContainer">
            <FontAwesomeIcon
              icon={faTwitter}
              color={"#04AAFF"}
              size="3x"
              style={{ marginBottom:30 }}
            />
            <AuthForm />
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                    Continue with Google! <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button onClick={onSocialClick} name="github" className="authBtn">
                    Continue with Github! <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
};

export default Auth;
