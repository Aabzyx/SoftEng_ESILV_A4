<template>
<p>Test</p>
  <input type="text" v-model="input" v-on:keydown.enter="search">
  <button v-on:click="search">Search</button>
  <div v-for="(src, index) in arr" v-bind:key="index">
    <img :src="src">
  </div>
</template>

<script>
export default {
  name: "TestImage",
  data() {
    return {
      arr: [],
      input: '',
    };
  },
  computed: {},
  methods: {
    async search() {
      let url = "https://api.unsplash.com/search/photos?query=" + this.input + "&per_page=30&client_id=U8gb60YrrIRNvvaC7AalrQV9wgXdGQ3qEqVC1rXJegc";
      let memory = new Array();
      await fetch(url)
          .then(async function (data) {
            return await data.json();
          })
          .then(function (data) {
            data.results.forEach(photo => {
              memory.push(photo.urls.regular);
            })
          })
      this.arr = memory;
    }
  },
  mounted() {
    this.$nextTick(this.search)
  }
}
</script>

<style scoped>

</style>