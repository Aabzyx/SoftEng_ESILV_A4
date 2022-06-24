// store/index.js
import { createStore } from 'vuex'

export default createStore({
    state: {
        actualClient: {},
        elections : [],
        nbrChoices : 5, // verif que cette veleur est pas modifiée par l'user
        choices : {},
        actualElection : {}
    },
    getters: {},
    mutations: {
        //Logout as user
        LOG_OUT(state){
            state.actualClient = {};
        },
        },
    actions: {
        async logOut({commit}, payload){
            commit("LOG_OUT", payload)
        },
    }
})
