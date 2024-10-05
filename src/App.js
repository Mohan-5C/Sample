import React from "react";
import CreateUsers from "./CreateUsers";
import ViewUsers from "./ViewUsers";
import { Provider } from "react-redux";
import Store from "./Store";
function App() {
  return (
    <>
     <Provider store={Store}>
        <CreateUsers/>
        <ViewUsers/>
     </Provider>
    </>
  );
}

export default App;
