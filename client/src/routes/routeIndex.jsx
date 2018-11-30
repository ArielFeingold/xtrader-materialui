import LoginPage from "../views/LoginPage.jsx";
import SignupPage from "../views/SignupPage.jsx";
import Protfolio from "../views/Protfolio.jsx";
import TradeHistory from "../views/TradeHistory.jsx";
import Logout from "../components/Logout.jsx";
import NoAccess from "../views/NoAccess.jsx";


export const authRouteIndex = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/signup", name: "SignupPage", component: SignupPage },
  { path: "/protfolio", name: "Protfolio", component: Protfolio },
  { path: "/trade-history", name: "Trades", component: TradeHistory },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/", name: "LandingPage", component: LoginPage }
];

export const unAuthRouteIndex = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/signup", name: "SignupPage", component: SignupPage },
  { path: "/access-denied", name: "NoAccess", component: NoAccess },
  { path: "/", name: "LandingPage", component: LoginPage }
]
