import React, { useContext, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Components/Router";
import DataProvider, {
  DataContext,
} from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [dispatch]);

  return (
    <DataProvider>
        <Routing />
    </DataProvider>
  );
}

export default App;
