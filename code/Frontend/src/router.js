import { createWebHistory, createRouter } from "vue-router";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const routes =  [
    {
        path: "/",
        name: "Header",
        component: Header
    },
    {
        path: "/LoginForm",
        name: "LoginForm",
        component: LoginForm
    },
    {
        path: "/RegisterForm",
        name: "RegisterForm",
        component: RegisterForm
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

