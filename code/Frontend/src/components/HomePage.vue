<template>
  <p>HomePage</p>
  <div>
    
    <div v-for="(election, index) in (elections)" :key="index">
      <p> public votes :</p>
      <div v-if="election.type === 'informerlle' ">
        <p>{{election.name}}</p>
        <img :src=election.image>
        <div v-on:click="deleteVote(vote)">
          <a>❌</a>
        </div>
        <div v-on:click="test()"><!--reflechir a comment rediriger!-->
          <a>Vote</a>
        </div>
      </div>
    </div>
    
    <div v-for="(election, index) in (elections)" :key="index">
      <p> official votes :</p>
      <div v-if="election.type === 'officiel' ">
        <p>{{election.name}}</p>
        <img :src=election.image>
        <div class="btn btn-primary" v-on:click="test()"><!--reflechir a comment rediriger!-->
          <a>Vote</a>
        </div>
      </div>
    </div>
    <div>
      <router-link class="btn btn-primary" to="/createVote">create vote</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "HomePage",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['elections']),
  },
  methods:{
    ...mapActions(['deleteVote']),
  },
  mounted: function(){

  }
}
</script>

<style scoped>

</style>