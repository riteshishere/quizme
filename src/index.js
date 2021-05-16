import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SigninPage, SignupPage } from "./pages/AuthenticationPage";
import Index from "./pages/Index";
// import Store, { AuthContext } from '../state/Store';
// import { loadUser } from '../state/auth/authActions';
function App() {
    //   const auth = useContext(AuthContext);

    //   useEffect(() => {
    //     loadUser(auth.dispatch,auth.state);
    //   },[auth.state.userLoggedIn,loadUser]);

    return (
        // <Store>
        <Router>
            <Switch>
                <Route exact={true} path="/" render={props => <Index {...props} />} />
                <Route exact={true} path="/signin" render={props => <SigninPage {...props} />} />
                <Route exact={true} path="/signup" render={props => <SignupPage {...props} />} />
            </Switch>
        </Router>
        // </Store>
    );
}
// function AppWithStore() {
//     return <Store>
//         <App />
//     </Store>
// }

ReactDOM.render(<App />, document.getElementById("app"));