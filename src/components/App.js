import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { updateProfile } from "@firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) { // 로그인 상태 변경
        setUserObj({/* userObj 크기 줄이는 방식 */
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) =>  updateProfile(user, { displayName: user.displayName }), 
        });
      } else {
        setUserObj(false);
      }
      setInit(true); // init 상태 변경
    });
  }, []); // []를 사용해야 1회만 동작
  
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) =>  updateProfile(user, { displayName: user.displayName }), 
    });
  };
    
  return (
    <>
     {init ? (
        <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj}/> // 페이지의 중간역할 
      ) : (
         "initializing..."
        )}
        
    </>
  );
}

export default App;
