<template>
  <p>ShowResultats</p>

  <div v-for="(resultat,index) in resultas" v-bind:key=index>
    <div>{{resultat}}</div>
  </div>
</template>

<script>
export default {
  name: "ShowResultats",
  data() {
    return {
      resultas : [],

    };
  },
  computed: {

  },
  methods:{

  },
  mounted: function(){

  }
}
</script>

<style scoped>

</style>