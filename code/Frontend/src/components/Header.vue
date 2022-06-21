<template>
  <div>
    <nav>
            <router-link class="btn btn-primary" to="/Home" >Home</router-link>

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