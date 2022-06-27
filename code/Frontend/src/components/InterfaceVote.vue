<template>
  <div>
    <h1>Vote now</h1>

    <p>Nom du vote : {{$store.state.actualElection.nom}}</p>
  <div v-for="choix in $store.state.actualElection.choix" :key="choix.id">
    <label>{{choix}}</label>
    <input type="radio" id={{choix}} name="choix">
  </div>
  <div>
    <input type="submit" value="Créer" v-on:click="vote()">
  </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "InterfaceVote",
  data() {
    return {
      idUser : Number,
      idElection: Number,
      choix : ""
    };
  },
  computed: {
  },
  methods:{
    vote(){
      const newVote = {
        idUser: this.$store.state.actualClient._id,
        idElection: this.$store.state.actualElection._id,
        choix: this.choix,
      }
      http
          .post("/api/vote ", newVote)
          .then(response => {
            console.log(response.data);
            alert("Vote add");
          })
          .catch(e => {
            if (e.response.status === 500){
              alert("One or many values are already used")
            }
            console.log(e);
          });
    },
  },
  mounted: function(){

  }
}
</script>

<style scoped>

</style>