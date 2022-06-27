<template>
    <nav class="container-fluid">
      <router-link class="mr-1 btn btn-primary" to="/" >LoginForm</router-link>
      <router-link class="mr-1 btn btn-primary" to="/RegisterForm" >RegisterForm</router-link>
      <router-link class="mr-1 btn btn-primary" to="/DifferentAcount" >DifferentAcount</router-link>
      <router-link class="mr-1 btn btn-primary" to="/HomePageVue" >HomePageVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/CreateElectionVue" >CreateElectioneVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/IfMajeurVue" >IfMajeurVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/InterfaceVoteVue" >InterfaceVoteVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/ShowResultatsVue" >ShowResultatsVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/JoinVoteVue" >JoinVoteVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/ConfigureChoicesVue" >ConfigureChoicesVue</router-link>
    </nav>
  <router-view>
  </router-view>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
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

.transition{
  --animate-duration: 0.8s;
}

</style>