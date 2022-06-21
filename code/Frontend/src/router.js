import { createWebHistory, createRouter } from "vue-router";
//import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePageVue from "./components/HomePage.vue";
import CreateVoteVue from "./components/CreateVote.vue";
import ChoixVoteVue from "./components/ChoixVote.vue";
import IfMajeurVue from "./components/IfMajeur.vue";
import InterfaceVoteVue from "./components/InterfaceVote.vue";
import JoinVoteVue from "./components/JoinVote.vue";
import ShowResultatsVue from "./components/ShowResultats.vue";

const routes =  [
    {
        path: "/",
        name: "HomePageVue",
        component: HomePageVue
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
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

