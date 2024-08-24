import React, { useContext, useEffect } from "react";
import Routing from "./Components/Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          payload: authUser, // Use 'payload' instead of 'user'
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          payload: null, // Use 'payload' instead of 'user'
        });
      }
    });
  }, [dispatch]);

  console.log(user); // Log to check the user state

  return <Routing />;
}

export default App;
