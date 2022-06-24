<template>
  <div v-for="choix in actualElection.choix" :key="choix.id">
    <label>{{choix.nom}}</label>
    <input type="radio" id={{choix.nom}} name="choix">         
  </div>
  <div>
    <input type="submit" value="Créer" v-on:click="vote()">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "InterfaceVote",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['actualElection'])
  },
  methods:{

  },
  mounted: function(){

  }
}
</script>

<style scoped>

</style>