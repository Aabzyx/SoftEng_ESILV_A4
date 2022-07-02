<template>
<p>Test</p>
  <input type="text" v-model="input">
  <button v-on:click="search">Search</button>
  <div v-for="(url, index) in arr" v-bind:key="index">
    {{url}}
  </div>
</template>

<script>
export default {
  name: "TestImage",
  data() {
    return {
      arr: [],
      input: 'flower',
      url: "https://api.unsplash.com/search/photos?query=" + this.input + "&per_page=30&client_id=U8gb60YrrIRNvvaC7AalrQV9wgXdGQ3qEqVC1rXJegc",

    };
  },
  computed: {},
  methods: {
    test(){
      this.arr.push(1)
      console.log(this.arr)
    },
    search() {
      let memory = new Array();
    fetch(this.url)
        .then(function (data){
          return data.json();
        })
        .then(function (data){
          data.results.forEach(photo => {
            console.log(photo)
            // memory.push(photo.urls.regular);
          })
        })
      this.arr = memory;
      console.log(this.arr)
  }
  }
}
</script>

<style scoped>

</style>