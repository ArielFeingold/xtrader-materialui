import LoginPage from "../views/LoginPage.jsx";
import SignupPage from "../views/SignupPage.jsx";
import Protfolio from "../views/Protfolio.jsx";


const routeIndex = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/signup", name: "SignupPage", component: SignupPage },
  { path: "/protfolio", name: "Protfolio", component: Protfolio },
  { path: "/", name: "LandingPage", component: LoginPage }
];

export default routeIndex;
