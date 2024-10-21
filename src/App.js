
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";

import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Collection_list from "./pages/Collection-list";
import Pageten from "./pages/Pageten";
import ApiForm from "./pages/pagetweleve";
import Pagethird from "./pages/pagethird";
import Pagefifteen from "./pages/pagefifteen";
import Pagesixteen from "./pages/pageonesix";
import Pageseven from "./pages/Pagesoneseven";
import SearchApp from "./pages/Searchapp";
import Pagefive from "./pages/pagefive";

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/search-app" component={SearchApp} />
          <Route exact path="/pagesixteen" component={Pagesixteen} />
          <Route exact path="/pageseven" component={Pagefive} />
          <Route exact path="/api-data" component={Pageten} />
          <Route exact path="/api-data/page15" component={Pagefifteen} />
          <Route exact path="/config-app" component={ApiForm} />
          <Route exact path="/page-third" component={Pagethird} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/collections" component={Collection_list} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
