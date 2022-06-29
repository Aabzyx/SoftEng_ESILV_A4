<template>
  <p>HomePage</p>
  <div v-for="(election, index) in elections" v-bind:key="index">
    {{election.nom}}
    <button v-on:click="goVote(election)">Vote</button>
  </div>
</template>

<script>
import http from "@/http-common";

export default {
  name: "HomePage",
  data() {
    return {
      elections: [],
    };
  },
  computed: {

  },
  methods:{
  //show election
    showElection(){
      console.log("ok")
      http
          .get("/election/getElection")
          .then(response => {
            response.data.forEach(p => {
              if (this.$store.state.actualClient.autorisedElections.includes(p._id)){
                this.elections.push(p)
              }
            })

            console.log(response)
            console.log(this.elections)
          })
          .catch(e => {
            console.log(e);
          });
    },
    goVote(election){
      this.$store.state.actualElection = election;
      this.$router.push('/InterfaceVoteVue')
    },
    redirection(){
     /* if (this.$store.state.actualClient === null){
        this.$router.push('/')
      }*/
      console.log(sessionStorage.nom)
      if (sessionStorage.getItem("userData") === null){
        this.$router.push('/')
      }
      }
  },
  mounted: function(){
      this.$nextTick(this.redirection)
      this.$nextTick(this.showElection)
   }
}
</script>

<style scoped>

</style>