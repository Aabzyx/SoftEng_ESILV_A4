import { createWebHistory, createRouter } from "vue-router";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePageVue from "./components/HomePage.vue";
import CreateVoteVue from "./components/CreateVote.vue";
import ChoixVoteVue from "./components/ChoixVote.vue";
import IfMajeurVue from "./components/IfMajeur.vue";
import InterfaceVoteVue from "./components/InterfaceVote.vue";
import JoinVoteVue from "./components/JoinVote.vue";
import LoginFormVue from "./components/LoginForm.vue";
import RegisterFormVue from "./components/RegisterForm.vue";
import ShowResultatsVue from "./components/ShowResultats.vue";

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
    {
        path: "/HomePageVue",
        name: "HomePageVue",
        component: HomePageVue
    },
    {
        path: "/CreateVoteVue",
        name: "CreateVoteVue",
        component: CreateVoteVue
    },
    {
        path: "/ChoixVoteVue",
        name: "ChoixVoteVue",
        component: ChoixVoteVue
    },
    {
        path: "/IfMajeurVue",
        name: "IfMajeurVue",
        component: IfMajeurVue
    },
    {
        path: "/InterfaceVoteVue",
        name: "InterfaceVoteVue",
        component: InterfaceVoteVue
    },
    {
        path: "/ShowResultatsVue",
        name: "ShowResultatsVue",
        component: ShowResultatsVue
    },
    {
        path: "/JoinVoteVue",
        name: "JoinVoteVue",
        component: JoinVoteVue
    },
    {
        path: "/LoginFormVue",
        name: "LoginFormVue",
        component: LoginFormVue
    },
    {
        path: "/RegisterFormVue",
        name: "RegisterFormVue",
        component: RegisterFormVue
    },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

