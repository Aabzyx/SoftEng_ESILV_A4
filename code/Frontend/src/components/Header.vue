<template>
  <div class="container-fluid">
    <nav>
      <router-link class="mr-1 btn btn-primary" to="/LoginForm" >LoginForm</router-link>
      <router-link class="mr-1 btn btn-primary" to="/RegisterForm" >RegisterForm</router-link>
      <router-link class="mr-1 btn btn-primary" to="/" >HomePageVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/CreateVoteVue" >CreateVoteVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/ChoixVoteVue" >ChoixVoteVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/IfMajeurVue" >IfMajeurVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/InterfaceVoteVue" >InterfaceVoteVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/ShowResultatsVue" >ShowResultatsVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/JoinVoteVue" >JoinVoteVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/LoginFormVue" >LoginFormVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/RegisterFormVue" >RegisterFormVue</router-link>
    </nav>
  </div>
  <router-view/>
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

</style>