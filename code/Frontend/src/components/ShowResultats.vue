<template>
  <Header2 v-if="$store.state.actualClient !== null"></Header2>
  <p>ShowResultats</p>

  <div v-for="(resultat,index) in resultas" v-bind:key=index>
    <div>{{resultat}}</div>
    <btn v-on="onclick(getAllVotesElection)"></btn>
    <btn v-on="onclick(getVoteCurrentUser)"></btn>
  </div>
</template>

<script>
import http from "../http-common";
import Header2 from "./Header2.vue";
export default {
    name: "ShowResultats",
    data() {
        return {
            idVote: Object,
            resultats: [],
        };
    },
    computed: {},
    methods: {
      redirection() {
        if (this.$store.state.actualClient === null) {
          this.$router.push("/");
        }
      },
        getAllVotesElection() {
            const objet = {
                actualVote: this.$store.state.actualVote,
                actualElection: this.$store.state.actualElection
            };
            http
                .get("/api/votes", objet)
                .then(response => {
                console.log(response.data);
                alert(objet);
            });
        },
        getVoteCurrentUser() {
            const objet = {
                actualVote: this.$store.state.actualVote,
            };
            http
                .get("/api/vote/", objet)
                .then(response => {
                console.log(response.data);
                alert("get vote " + response.data);
            })
                .catch(e => {
                if (e.response.status === 500) {
                    alert("One or many values are already used");
                }
                console.log(e);
            });
        }
    },
    mounted: function () {
      this.$nextTick(this.redirection);
    },
    components: { Header2 }
}
</script>

<style scoped>

</style>