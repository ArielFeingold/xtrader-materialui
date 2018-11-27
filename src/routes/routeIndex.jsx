import LoginPage from "../views/LoginPage.jsx";
import SignupPage from "../views/SignupPage.jsx";


const routeIndex = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/signup", name: "SignupPage", component: SignupPage },
  { path: "/", name: "LandingPage", component: LoginPage }
];

export default routeIndex;
