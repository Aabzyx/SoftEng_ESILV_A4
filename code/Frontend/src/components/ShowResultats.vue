<template>
<Header2 v-if="$store.state.actualClient !== null"></Header2>
<!--  <p>ShowResultats</p>-->
<!--  <div v-for="(election, index) in electionBrut.resultats" v-bind:key="index">-->
<!--    <div>{{electionBrut.choix[index].value}} : {{election}} %</div>-->

<!--  </div>-->
  <h1 style="display: flex; justify-content: center; margin-top: 15px">Résultats éléction</h1>
  <div class="entie">
    <div class="podium">
<!--      <div class="deuxieme">-->
<!--        <div class="participant-deux">-->

<!--        </div>-->
<!--        <div class="podiume-deux">-->

<!--        </div>-->

<!--      </div>-->
<!--      <div class="premier">-->
<!--        <div class="participant-un">-->

<!--        </div>-->
<!--        <div class="podiume-un">-->

<!--        </div>-->
<!--      </div>-->
<!--      <div class="troisieme">-->
<!--        <div class="participant-trois">-->

<!--        </div>-->
<!--        <div class="podiume-trois">-->

<!--        </div>-->
<!--      </div>-->
      <div class="container podium">
        <div class="podium__item slide-in-bottom">
          <div class="choix slide-in-bottom"></div>
          <div class="podium__rank second slide-in-bottom">2</div>
        </div>
        <div class="podium__item slide-in-bottom">
          <div class="choix slide-in-bottom"></div>
          <div class="podium__rank first">
            <svg class="podium__number" viewBox="0 0 27.476 75.03" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 214.957736, -43.117417)">
                <path class="st8" d="M -198.928 43.419 C -200.528 47.919 -203.528 51.819 -207.828 55.219 C -210.528 57.319 -213.028 58.819 -215.428 60.019 L -215.428 72.819 C -210.328 70.619 -205.628 67.819 -201.628 64.119 L -201.628 117.219 L -187.528 117.219 L -187.528 43.419 L -198.928 43.419 L -198.928 43.419 Z" style="fill: #000;"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="podium__item slide-in-bottom">
          <div class="choix slide-in-bottom"></div>
          <div class="podium__rank third slide-in-bottom">3</div>
        </div>
      </div>
    </div>
  </div>

  <div id="app" class="container">
    <div class="row mt-5">
      <div class="col mt-5">
        <h2> Suffrages Exprimés </h2>
        <PieChart />
      </div>
      <div class="col mt-5">
        <h2> Résultats Complets </h2>
        <BarChart />
      </div>
    </div>
  </div>

</template>

<script>
import Header2 from "./Header2.vue";
import PieChart from './PieChart.vue'
import BarChart from './BarChart.vue'

export default {
    name: "ShowResultats",
    data() {
        return {
          electionBrut: [],
          indexSorted: [],
          arrVoters: [],
        };
    },
    async created() {
      /*
      // affect data in the arrays here in forEach loop
      data

      data.forEach(d => {
        const {
          hasVoted,
          hasNotVoted
        } = d;
      })
      */
      this.arrVoters.push({voted: 60, notVoted: 40});
    },
    computed: {},
    methods: {
      //A finir kupata ?
      sorted(){
        let test = this.$store.state.actualElection.resultats.sort()
        test.forEach(r => this.indexSorted.push(this.$store.state.actualElection.resultats.indexOf(r)))
      },
      miseEnFormeRes(){
        this.electionBrut = this.$store.state.actualElection
        for (let i = 0; i < this.electionBrut.resultats.length; i++){
          this.electionBrut.resultats[i] = (this.electionBrut.resultats[i] * 100) / this.electionBrut.resultats.length
        }
        console.log(this.electionBrut)
      },
      redirection() {
        if (this.$store.state.actualClient === null) {
          this.$router.push("/");
        }
      },

    },
    mounted: function () {
      this.$nextTick(this.redirection);
      this.$nextTick(this.miseEnFormeRes);
    },
    components: { Header2, PieChart, BarChart  }
}
</script>

<style scoped>

.entie{
  background: #1c57b5;
  min-height: 800px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}

.podium{
  display: flex;
  width: 100%;
  height: 100%;
  background: #7fd3ed;
  justify-content: center;
}
/*.podiume-deux{*/
/*  width:100px;*/
/*  height: 500px;*/
/*  background: green;*/

/*}*/

/*.podiume-un{*/
/*  width:150px;*/
/*  height: 800px;*/
/*  background: yellow;*/
/*  margin-top:;*/
/*}*/


body {
  font-family: sans-serif;
}

.container {
  display: flex;
  align-items: flex-end;
}

.podium__item {
  width: 200px;
}

.podium__rank {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #fff;
}

.podium__city {
  text-align: center;
  padding: 0 .5rem;
}

.podium__number {
  width: 27px;
  height: 75px;
}

.podium .first {
  min-height: 300px;
  background: rgb(255,172,37);
  background:
      linear-gradient(333deg,
      rgba(255,172,37,1) 0%,
      rgba(254,207,51,1) 13%,
      rgba(254,224,51,1) 53%,
      rgba(255,172,37,1) 100%);

}

.podium .second {
  min-height: 200px;
  background: blue;
}

.podium .third {
  min-height: 100px;
  background: green;
}

.choix {
  background-color: #5469d4;
  min-height: 280px;
  margin: 20px auto;
  width: 170px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

.slide-in-bottom {
  animation: slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>