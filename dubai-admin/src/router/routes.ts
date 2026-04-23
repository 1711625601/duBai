import DefiPage from "@/views/DefiPage";
import FunPage from "@/views/FunPage";
import HomePage from "@/views/HomePage";
import LendingPage from "@/views/LendingPage";
import ProfilePage from "@/views/ProfilePage";
import RegisterPage from "@/views/RegisterPage";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/defi",
    component: DefiPage,
  },
  {
    path: "/fun",
    component: FunPage,
  },
  {
    path: "/lending",
    component: LendingPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
];
