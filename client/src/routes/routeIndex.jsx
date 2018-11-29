import LoginPage from "../views/LoginPage.jsx";
import SignupPage from "../views/SignupPage.jsx";
import Protfolio from "../views/Protfolio.jsx";
import Logout from "../components/Logout.jsx";
import NoAccess from "../views/NoAccess.jsx";


const routeIndex = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/signup", name: "SignupPage", component: SignupPage },
  { path: "/protfolio", name: "Protfolio", component: Protfolio },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/access-denied", name: "NoAccess", component: NoAccess },
  { path: "/", name: "LandingPage", component: LoginPage }
];

export default routeIndex;
