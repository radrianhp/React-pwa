import "assets/App.css";
import "assets/Responsive.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import Offline from "component/Offline";
import { useState, useEffect } from "react";

function App() {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }

  useEffect(() => {
    return () => {
      handleOfflineStatus();

      window.addEventListener("online", handleOfflineStatus);
      window.addEventListener("offline", handleOfflineStatus);

      return function () {
        window.removeEventListener("online", handleOfflineStatus);
        window.removeEventListener("offline", handleOfflineStatus);
      };
    };
  }, [offlineStatus]);

  return (
    <div className="App">
      {offlineStatus && <Offline />}
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
