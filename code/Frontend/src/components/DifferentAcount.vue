<template>
  <br>
  <h1 class="h1">Choose your type of acount :</h1>
    <br><h4>You could change it in the futur</h4>
  <div class="flex">
  <section class="page-contain" v-for="type in typeAccounts" v-bind:key="type.id">
    <a href="#" class="data-card" @click="chooseOffer(type)">
      <h3>{{type.titre}}</h3>
      <h4>Advantages</h4>
      <p>{{type.avantage1}}
        <br>{{type.avantage2}}
        <br>{{type.avantage3}}
      </p>
      <br><br><p class="price">{{type.prix}}</p>
      <span class="link-text">
      Purchase
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="floralwhite"/>
</svg>
    </span>
    </a>
  </section>
  </div>
</template>

<script>
import http from "@/http-common";

export default {
  name: "DifferentAcount",
  data(){
    return{
      typeAccounts: [
        {
          id: 1, titre: 'Free', avantage1: 'Classic account', avantage2: 'Can create vote of only 10 participants maximum', avantage3: 'Can create only 2 votes at the same time', prix: '0.0 $ by months'
        },
        {
          id: 2, titre: 'Premium', avantage1: 'Best offer', avantage2: 'Can create vote of 100 participants maximum', avantage3: 'Can create 10 votes at the same time', prix: '5.0 $ by months'
        },
        {
          id: 3, titre: 'Premium+', avantage1: 'Beast offer', avantage2: 'Can create vote of 500 participants maximum', avantage3: 'Can create 50 votes at the same time', prix: '10.0 $ by months'
        }
      ]
    }
  },
  methods:{
    chooseOffer(type){
      if (type.id === 1){
        this.$store.state.actualClient.subscription = 'free'
      }
      if (type.id === 2){
        this.$store.state.actualClient.subscription = 'premium'
      }
      if (type.id === 3){
        this.$store.state.actualClient.subscription = 'super-premium'
      }

      http
          .put("/user/chooseTypeAccount", this.$store.state.actualClient)
          .then(response => {
            console.log(response.data);
            alert("User update subscription")
          })
          .catch(e => {
            if (e.response.status === 404){
              alert("Can't update your account")
            }
            console.log(e);
          });
    },
  },
  mounted: function() {
    this.$nextTick()
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap");

* {
  box-sizing: border-box;
}

.flex{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

h1{
  text-align: center;
  font-family: "Open Sans", sans-serif;
}

h4{
  text-align: center;
}

.page-contain {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  border: 0.75em solid white;
  padding: 2em;
  font-family: "Open Sans", sans-serif;
}

.data-card {
  display: flex;
  flex-direction: column;
  height: 540px;
  max-width: 20.75em;
  min-height: 20.75em;
  overflow: hidden;
  border-radius: 0.9em;
  text-decoration: none;
  background: #212d63;
  margin: 1em;
  margin-top: -200px;
  padding: 2.75em 2.5em;
  box-shadow: 0 1.5em 2.5em -0.5em rgba(0, 0, 0, 0.1);
  transition: transform 0.45s ease, background 0.45s ease;
}
.data-card h3 {
  text-align: center;
  color: whitesmoke;
  font-size: 3.5em;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 0.5em;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid antiquewhite;
  transition: color 0.45s ease, border 0.45s ease;
}
.data-card h4 {
  color: #697386;
  text-transform: uppercase;
  font-size: 1.125em;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.1em;
  margin: 0 0 1.777777778em;
  transition: color 0.45s ease;
}
.data-card p {
  opacity: 0;
  color: #7fd3ed;
  font-weight: 600;
  line-height: 1.8;
  margin: 0 0 1.25em;
  transform: translateY(-1em);
  transition: opacity 0.45s ease, transform 0.5s ease;
}
.data-card .link-text {
  display: block;
  color: floralwhite;
  font-size: 1.125em;
  font-weight: 600;
  line-height: 1.2;
  margin: auto 0 0;
  transition: color 0.45s ease;
}
.data-card .link-text svg {
  margin-left: 0.5em;
  transition: transform 0.6s ease;
}
.data-card .link-text svg path {
  transition: fill 0.45s ease;
}
.data-card:hover {
  background: #5469d4;
  transform: scale(1.02);
}
.data-card:hover h3 {
  color: #ffffff;
  border-bottom-color: #1a1f36;
}
.data-card:hover h4 {
  color: #ffffff;
}
.data-card:hover p {
  opacity: 1;
  transform: none;
}
.data-card:hover .link-text {
  color: #ffffff;
}
.data-card:hover .link-text svg {
  -webkit-animation: point 1.25s infinite alternate;
  animation: point 1.25s infinite alternate;
}
.data-card:hover .link-text svg path {
  fill: #ffffff;
}

@-webkit-keyframes point {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0.125em);
  }
}

@keyframes point {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0.125em);
  }
}

.data-card .price{
  color: indianred;
  font-size: 25px;
}
</style>