<template>

  <div>
    <h1>Vote now</h1>

    <p>Nom de l'election : {{$store.state.actualElection.nom}}</p>

    <div v-for="(choix, index) in $store.state.actualElection.choix" v-bind:key="index">
      <label>{{ choix }}</label>
      <input type="radio" value={{choix}} name="choix" v-on:change="choice(choix)">
    </div>
    <div>
      <input type="submit" value="Vote" v-on:click="vote(choice(choix))" >
    </div>

  </div>

</template>

<script>
import http from "../http-common";

export default {
  name: "InterfaceVote",
  data() {
    return {
      idUser: Number,
      idElection: Number,
      choix: []
    };
  },
  computed: {},
  methods: {
    vote(c) {
      const newVote = {
        idUser: this.$store.state.actualClient._id,
        idElection: this.$store.state.actualElection._id,
        choix: c[0]
      };
      console.log(newVote)
      http
          .post("/vote/createVote", newVote)
          .then(response => {
            this.$store.state.actualVote = response.data;
            console.log(response.data);
            alert("Vote add");
          })
          .catch(e => {
            if (e.response.status === 500) {
              alert("One or many values are already used")
            }
            console.log(e);
          });
    },
    choice(c){
      return this.choix = c;
    }
  },


  mounted: function () {

  }
}
</script>

<style scoped>

</style>