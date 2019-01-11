import Vue from "vue";
import Router from "vue-router";
import Versus from "./components/Versus";
import Leaderboard from "./components/Leaderboard";
import History from "./components/History";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import AddPlayer from "./components/AddPlayer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Versus",
      component: Versus,
    },
    {
      path: "/leaderboard",
      name: "Leaderboard",
      component: Leaderboard,
    },
    {
      path: "/history",
      name: "History",
      component: History,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/add-player",
      name: "AddPlayer",
      component: AddPlayer,
    },
  ],
});
