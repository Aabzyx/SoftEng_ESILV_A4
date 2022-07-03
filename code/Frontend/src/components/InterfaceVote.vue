<template>
  <Header2 v-if="$store.state.actualClient !== null"></Header2>
  <!-- <div class="container"> -->
    <div class="formbg">
      <div class="title">
        <h1>Vote now</h1>
        <p>Nom de l'election : {{$store.state.actualElection.nom}}</p>
      </div>
      <div class="vote-item" v-for="(choix, index) in $store.state.actualElection.choix" v-bind:key="index">
        <!-- <img :src="choix.urlImg"> -->
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryVmt8i7VYR32xc0ByNgVQKnN-Pt0apuS0VWXP3rjCA&s">
        <label>{{ choix.value }}</label>
        <input class="option-input radio" type="radio" value={{choix.value}} name="choix" v-on:change="choice(index)">
      </div>
      <div>
        <input name="submit" type="submit" value="Vote" v-on:click="vote(choice(choix))" >
      </div>
    </div>
  <!-- </div> -->

</template>

<script>
import http from "../http-common";
import Header2 from "./Header2.vue";

export default {
    name: "InterfaceVote",
    data() {
        return {
            idUser: Number,
            idElection: Number,
            choix: Number
        };
    },
    computed: {},
    methods: {
      redirection() {
        if (this.$store.state.actualClient === null) {
          this.$router.push("/");
        }
      },
        vote(c) {
        let tab = [];
            const newVote = {
                idUser: this.$store.state.actualClient._id,
                idElection: this.$store.state.actualElection._id,
                choix: c
            };
            http
                .post("/vote/createVote", newVote)
                .then(response => {
                this.$store.state.actualVote = response.data;
                http
                    .get("election/getElection")
                    .then(r => {
                        tab = r.data;
                        tab.forEach(res => {
                          if (res._id === this.$store.state.actualElection._id){
                            res.resultats[this.choix] += 1;
                            console.log(res);
                            http
                                .put("/election/updateElection", res)
                                .then(responseDuFutur => {
                                  console.log(responseDuFutur)
                                  this.$router.push('HomePageVue')
                                })
                                .catch(errortamere => {
                                  if (errortamere.response.status === 404) {
                                    alert("Can't update your account");
                                  }
                                  console.log(errortamere);
                                });
                          }
                              })})
            })
                .catch(e => {
                if (e.response.status === 500) {
                    alert("One or many values are already used");
                }
                console.log(e);
            });
        },
        choice(c) {
            return this.choix = c;
        }
    },
    mounted: function () {
      this.$nextTick(this.redirection);
    },
    components: { Header2 }
}
</script>

<style scoped>

/* .container {
} */
.formbg {
    margin: 0px auto; 
    width: 100%;
    max-width: 80%;
    background: white;
    border-radius: 4px;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
    display: flex;
    flex-direction: column;
  }

  .vote-item {
    width: 80%;
    max-width: 280px;
    height: 44px;
    margin: auto;
    margin-bottom: 5px;
    background-color: #5469d4;
    border-radius: 5px;
    padding-right: 20px;
    padding-left: 5px;
    display: flex;
    align-items: center;
  }

  .vote-item img {
    height: 38px;
    width: 38px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }
  /* .formbg .vote-item input {
    float: right;
  } */

  .title {
    margin:auto;
  }

  .formbg label {
    color: #fff;
    
  }


.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  /* position: relative; */
  /* top: 12px;  */
  /* right: 0;
  bottom: 0;
  left: 0; */
  height: 20px;
  width: 20px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  /* display: inline-block; */
  margin-right: 0.5rem;
  outline: none;
  /* position: relative; */
  z-index: 1000;
  margin-left: auto;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #40e0d0;
}
.option-input:checked::before {
  width: 20px;
  height: 20px;
  display:flex;
  /* content: '\f00c'; */
  font-size: 25px;
  font-weight:bold;
  position: absolute;
  align-items:center;
  justify-content:center;
  /* font-family:'Font Awesome 5 Free'; */
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #40e0d0;
  content: ''; 
  display: block;
  position: relative;
  z-index: 100;
}
.option-input.radio {
  border-radius: 50%;
}
.option-input.radio::after {
  border-radius: 50%;
}

input[name="submit"] {
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
  rgb(84, 105, 212) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  /* text-align: center; */
}

input[name = submit] {
  font-size: 16px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  width: 100px;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  margin: 10px auto 20px auto;
}

@keyframes click-wave {
  0% {
    height: 20px;
    width: 20px;
    opacity: 0.35;
    position: relative;
  }
  100% {
    height: 200px;
    width: 200px;
     margin-left: -90px;
    margin-top: -90px; 
    opacity: 0;
  }
}




</style>