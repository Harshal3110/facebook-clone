import "./App.css";
import Header from "./Header";
import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    
    // BEM naming convention

    // Wrap the entire app into a data layer - REDUX/React Context API
    // By doing this when we push data inside the data layer we can access it anywhere
    // for eg when login we push user in datalayer and acess it...
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

      {/* Widgets Right */}
    </div>
  );
}

export default App;
