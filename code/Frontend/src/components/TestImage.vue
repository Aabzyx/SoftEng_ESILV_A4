<template>
  <input v-model="input" v-on:keydown.enter="search">
  <br>
  <div class="grosse_div">
  <Carousel :itemsToShow="1.75" :wrapAround="true">
    <Slide v-for="slide in arr" :key="slide">
        <img :src="slide" style="width: 100px; height: 100px" class="carousel__item">
    </Slide>
    <template #addons>
<Navigation></Navigation>
    </template>
  </Carousel>
  </div>
</template>

<script>
import { Navigation, Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default {
  name: "TestImage",
  el: '#example',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
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
  }
}
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

.grosse_div{
  width: 150px;
}

:root {
  --vc-clr-primary: green;
}
</style>