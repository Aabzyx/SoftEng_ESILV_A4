// store/index.js
import { createStore } from 'vuex'

export default createStore({
    state: {
        actualClient: {},
        actualVote: {},
        actualElection: {},
        votes : [],
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
