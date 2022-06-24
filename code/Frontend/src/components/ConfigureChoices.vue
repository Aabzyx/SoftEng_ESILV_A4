<template>
  <div v-for="n in nbrChoices" v-bind:key="n.id">
    <div>choix {{n}}
        <div>
            <label><b>nom du vote {{n}}:</b></label>
            <input name="nomChoix" placeholder="nom du choix" v-model="text">
            <label><b>description :</b></label>
            <input name="description" placeholder="description" v-model="textarea">
            <label><b>choix logo :</b></label>
            <input name="logoVote" placeholder="Entrez l'URL" v-model="text">
        </div>
        <input type="submit" value="Créer" v-on:click="createVote()">
    </div>
  </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
  name: "configureChoices",
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
        'nbrChoices'
    ])
  },
  methods:{

  },
  mounted: function(){

  }
}
</script>

<style scoped>

</style>