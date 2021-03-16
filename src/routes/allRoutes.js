import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import UserProfile from "../pages/Authentication/user-profile"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Sidebar Menu
import Exchanger from "../pages/Exchanger/index"
import Orders from "../pages/SideMenu/Orders/index"
// import Wallet from "../pages/SideMenu/Wallet/index"
import Invite from "../pages/SideMenu/Invite/index"
import Merchant from "../pages/SideMenu/Merchant/index"

// Pages
import PagesFaqs from "../pages/Utility/pages-faqs"
import Notififactions from "../pages/Utility/notifications"

//Orders Pages
import Todo from "../pages/Todo/Todo"
import Ratings from "../pages/Ratings/Ratings"
import Favorite from "../pages/Favorite/Favorite"
import Bindings from "../pages/Bindings/Bindings"
import Alert from "../pages/Alert/Alert"
import Blacklist from "../pages/Blacklist/Blacklist"
import Arbitration from "../pages/Arbitration/Arbitration"

// Pages Component
import HelpDesk from "../pages/Helpdesk/Helpdesk"
import Chat from "../pages/Chat/Chat"
import Cryptoswab from "../pages/Cryptoswab"
import CashStation from "../pages/CashStation"
import Wallet from "../pages/Wallet/index"
import Balance from "../pages/Wallet/Balance"
import TransactionsHistory from "../pages/Wallet/TransactionsHistory"
import Send from "../pages/Wallet/Send"
import Conversion from "pages/Wallet/Conversion/index"
import Request from "pages/Wallet/Request"

// Pages Component "settings"
import Settings from "../pages/Settings"
import TransactionDetails from "pages/Wallet/TransactionDetails"

const userRoutes = [
  // Dashboard
  { path: "/dashboard", component: Dashboard },

  // Sidebar Menu
  { path: "/exchanger", component: Exchanger },
  { path: "/orders", component: Orders },
  { path: "/wallet", component: Wallet },

  { path: "/cash-station", component: CashStation },
  { path: "/invite", component: Invite },
  { path: "/help-desk", component: HelpDesk },
  { path: "/merchant", component: Merchant },
  { path: "/settings", component: Settings },

  //Orders pages
  { path: "/todo", component: Todo },
  { path: "/ratings", component: Ratings },
  { path: "/favorite", component: Favorite },
  { path: "/bindings", component: Bindings },
  { path: "/alert", component: Alert },
  { path: "/blacklist", component: Blacklist },

  // Utility
  { path: "/pages-faqs", component: PagesFaqs },
  { path: "/notifications", component: Notififactions },

  // Profile
  { path: "/profile", component: UserProfile },

  // Help-desk
  { path: "/help-desk", component: HelpDesk },

  // Balance details
  { path: "/balances/:currency", component: Balance },

  // Balances
  { path: "/balances", component: Wallet },

  // TransactionDetails
  { path: "/history/:id", component: TransactionDetails },

  // TransactionsHistory
  { path: "/history", component: TransactionsHistory },

  // Send
  { path: "/send", component: Send },

  // Conversion
  { path: "/conversion", component: Conversion },

  // Request
  { path: "/request", component: Request },

  //Arbitration
  { path: "/arbitration", component: Arbitration },

  // Inbox
  { path: "/inbox", component: Chat },

  // Cryptoswab
  { path: "/cryptoswab", component: Cryptoswab },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },

  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
