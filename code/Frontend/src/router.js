import { createWebHistory, createRouter } from "vue-router";
//import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePageVue from "./components/HomePage.vue";
import CreateVoteVue from "./components/CreateVote.vue";
//import ChoixVoteVue from "./components/ChoixVote.vue";
import IfMajeurVue from "./components/IfMajeur.vue";
import InterfaceVoteVue from "./components/InterfaceVote.vue";
import JoinVoteVue from "./components/JoinVote.vue";
import ShowResultatsVue from "./components/ShowResultats.vue";
import DifferentAcount from "@/components/DifferentAcount";
import ConfigureChoicesVue from "./components/ConfigureChoices.vue";

const routes =  [
    {
        path: "/HomePageVue",
        name: "HomePageVue",
        component: HomePageVue,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/",
        name: "LoginForm",
        component: LoginForm,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/RegisterForm",
        name: "RegisterForm",
        component: RegisterForm,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/DifferentAcount",
        name: "DifferentAcount",
        component: DifferentAcount,
        meta: {
            enterClass: "animate__animated animate__backInLeft",
            leaveClass: "animate__animated animate__backOutRight"
        }
    },
    {
        path: "/CreateVoteVue",
        name: "CreateVoteVue",
        component: CreateVoteVue
    },
    // {
    //     path: "/ChoixVoteVue",
    //     name: "ChoixVoteVue",
    //     component: ChoixVoteVue
    // },
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
        path: "/ConfigureChoicesVue",
        name: "ConfigureChoicesVue",
        component: ConfigureChoicesVue
    },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

