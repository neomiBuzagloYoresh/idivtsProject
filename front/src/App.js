import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import "./assets/scss/global.scss";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { AppFooter } from "./cmps/AppFooter";
import { MainAppPage } from "./pages/MainAppPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className="main-container">
          <Switch>
            <Route path="/homePage" component={HomePage} />
            <Route path="/" component={MainAppPage} />
          </Switch>
        </main>

        <footer>
          <AppFooter />
        </footer>
      </div>
    </Router>
  );
}
export default App;
