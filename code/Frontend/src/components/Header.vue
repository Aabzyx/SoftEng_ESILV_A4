<template>
    <nav class="container-fluid">
      <router-link class="mr-1 btn btn-primary" to="/ShowResultatsVue" >ShowResultatsVue</router-link>
      <router-link class="mr-1 btn btn-primary" to="/UpdatePassword">PasswordUpadte</router-link>
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