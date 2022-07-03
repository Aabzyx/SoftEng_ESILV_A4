<template>
  <Header2 v-if="$store.state.actualClient !== null"></Header2>
  <p>ShowResultats</p>
  <div v-for="(election, index) in electionBrut.resultats" v-bind:key="index">
    <div>{{electionBrut.choix[index].value}} : {{election}} %</div>

  </div>
</template>

<script>
import Header2 from "./Header2.vue";
export default {
    name: "ShowResultats",
    data() {
        return {
          electionBrut: [],
          indexSorted: [],
        };
    },
    computed: {},
    methods: {
      //A finir kupata ?
      sorted(){
        let test = this.$store.state.actualElection.resultats.sort()
        test.forEach(r => this.indexSorted.push(this.$store.state.actualElection.resultats.indexOf(r)))
      },
      miseEnFormeRes(){
        this.electionBrut = this.$store.state.actualElection
        for (let i = 0; i < this.electionBrut.resultats.length; i++){
          this.electionBrut.resultats[i] = (this.electionBrut.resultats[i] * 100) / this.electionBrut.resultats.length
        }
        console.log(this.electionBrut)
      },
      redirection() {
        if (this.$store.state.actualClient === null) {
          this.$router.push("/");
        }
      },

    },
    mounted: function () {
      this.$nextTick(this.redirection);
      this.$nextTick(this.miseEnFormeRes);
    },
    components: { Header2 }
}
</script>

<style scoped>

</style>