<template>
  <p>CreateVote</p>
  <div>
    <label><b>nom du vote :</b></label>
    <input name="nomVote" placeholder="nom du vote" v-model="text">
    <label><b>description :</b></label>
    <input name="description" placeholder="description" v-model="textarea">
    <label><b>choix logo :</b></label>
    <input name="logoVote" placeholder="Entrez l'URL" v-model="text">
    <label><b>nombre de votants :</b></label>
    <input name="nombreVotants" type="number">
    <input type="submit" value="next" v-on:click="continueVote()">
  </div>
</template>

<script>
export default {
  name: "CreateVote",
  data() {
    return {
    };
  },
  computed: {

  },
  methods:{
    continueVote() {

    }
  },
  mounted: function(){

  }
}
</script>

<style scoped>

</style>