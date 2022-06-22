<template>
  <p>JoinVote</p>
  <input type="text" class="code" v-model ="code"> <button v-on:click="joinVote()">Chercher</button>
</template>

<script>
import { mapState} from 'vuex'
import http from "../http-common";

export default {
  name: "JoinVote",
  data() {
    return {
      code : 0,
    };
  },
  computed: {
    ...mapState(["actualClient"]),
  },
  methods:{
    joinVote(){
      const leTout = {
        user : this.$store.state.actualClient,
        code : this.code,
      }
      http
       .post('election/chercherCode', leTout)
          .then(r =>{
                this.$store.state.actualClient.autorisedElections.push(r.data);
                http.put('user/joinVote',this.$store.state.actualClient)
                    .then(response => {
                      console.log("response :" , response);
                    });
          }
              )
    }
  },

  mounted: function(){

  }
}
</script>

<style scoped>

</style>