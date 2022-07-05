<template>
  <Header2 v-if="$store.state.actualClient !== null"></Header2>
  <div
    class="box-root flex-flex flex-direction--column"
    style="min-height: 100vh; flex-grow: 1"
  >
    <div class="loginbackground box-background--white padding-top--64">
      <div class="loginbackground-gridContainer">
        <div
          class="box-root flex-flex"
          style="grid-area: top / start / 8 / end"
        >
          <div
            class="box-root"
            style="
              background-image: linear-gradient(
                white 0%,
                rgb(247, 250, 252) 33%
              );
              flex-grow: 1;
            "
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5">
          <div
            class="box-root box-divider--light-all-2 animationLeftRight tans3s"
            style="flex-grow: 1"
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2">
          <div
            class="box-root box-background--blue800"
            style="flex-grow: 1"
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4">
          <div
            class="box-root box-background--blue animationLeftRight"
            style="flex-grow: 1"
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6">
          <div
            class="box-root box-background--gray100 animationLeftRight tans3s"
            style="flex-grow: 1"
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end">
          <div
            class="box-root box-background--cyan200 animationRightLeft tans4s"
            style="flex-grow: 1"
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end">
          <div
            class="box-root box-background--blue animationRightLeft"
            style="flex-grow: 1"
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20">
          <div
            class="box-root box-background--gray100 animationRightLeft tans4s"
            style="flex-grow: 1"
          ></div>
        </div>
        <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17">
          <div
            class="box-root box-divider--light-all-2 animationRightLeft tans3s"
            style="flex-grow: 1"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="box-root padding-top--24 flex-flex flex-direction--column"
      style="flex-grow: 1; z-index: 9"
    >
      <div
        class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center"
      >
        <h1>EkipVote</h1>
      </div>
      <div class="formbg">
        <h4>Elections informels :</h4>
        <div
          v-for="(election, index) in electionsInformel"
          v-bind:key="index"
          class="election-items"
        >
          <div class="election-head">
            <p class="name-election">{{ election.nom }}</p>
            <div class="progress">
              <div class="progress-value"></div>
            </div>
          </div>
          <div class="btns">
            <button v-on:click="goVote(election)" class="btn-home">Vote</button>
            <button
              v-on:click="closeElection(election)"
              class="btn-home"
              v-if="
                $store.state.actualClient.createdElections.find(
                  (e) => e === election._id
                ) !== undefined && election.isActive
              "
            >
              Close
            </button>
            <button
              v-on:click="deleteElection(election)"
              class="btn-home"
              v-if="
                $store.state.actualClient.createdElections.find(
                  (e) => e === election._id
                ) !== undefined
              "
            >
              Delete
            </button>
            <button
              v-on:click="goShowResultats(election)"
              class="btn-home"
              v-if="!election.isActive"
            >
              Results
            </button>
          </div>
          <p
            v-if="
              $store.state.actualClient.autorisedElections.find(
                (e) => e.election === election._id
              ).bool
            "
            style="color: #2bb6a3"
          >
            Voted
          </p>
          <p v-else style="color: darkred">Not Voted</p>
        </div>
        <h4>Elections officiels :</h4>
        <div
          v-for="(election, index) in electionsOfficiel"
          v-bind:key="index"
          class="election-items"
        >
          <p class="name-election">{{ election.nom }}</p>
          <div class="progress">
            <div class="progress-value"></div>
          </div>
          <div class="btns">
            <button v-on:click="goVote(election)" class="btn-home">Vote</button>
            <button v-on:click="goShowResultats(election)" class="btn-home">
              Results
            </button>
          </div>
        </div>
        <div class="div-btn-btm">
          <button class="btn-home-btm" v-on:click="goJoinElection">
            Join an election
          </button>
          <button class="btn-home-btm" v-on:click="goCreateElection">
            Create an election
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/http-common";
import Header2 from "./Header2.vue";
export default {
  name: "HomePage",
  data() {
    return {
      electionsOfficiel: [],
      electionsInformel: [],
      voted: "Not voted",
      elect: Object,
      activeClass: "is-visible",
      active: null,
    };
  },
  computed: {},
  methods: {
    //show election
    showElection() {
      http
        .get("/election/getElection")
        .then((response) => {
          response.data.forEach((p) => {
            this.$store.state.actualClient.autorisedElections.forEach(
              (elec) => {
                if (elec.election == p._id) {
                  if (p.type == "informel") {
                    this.electionsInformel.push(p);
                  }
                  if (p.type == "officiel") {
                    this.electionsOfficiel.push(p);
                  }
                }
              }
            );
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    goVote(election) {
      const elect = {
        electionData: election,
        user: this.$store.state.actualClient,
      };
      http
        .post("/votes/getAllVotesOfElection", elect)
        .then((response) => {
          if (response.data.length == 0) {
            this.$store.state.actualElection = election;
            this.$router.push("/InterfaceVoteVue");
          } else {
            response.data.forEach((r) => {
              console.log(r.idUser);
              console.log(this.$store.state.actualClient._id);
              if (r.idUser != this.$store.state.actualClient._id) {
                this.$store.state.actualElection = election;
                this.$router.push("/InterfaceVoteVue");
              } else {
                this.voted = "Voted";
                alert("You have already voted !");
                this.$router.push("/HomePageVue");
              }
            });
          }
        })
        .catch((e) => {
          if (e.response.status === 401) {
            console.log(e);
            alert("Not find this vote");
          }
        });
    },
    showVoted(election, index) {
      const elect = {
        electionData: election,
        user: this.$store.state.actualClient,
      };
      console.log(elect);
      http.post("/votes/getAllVotesOfElection", elect).then((response) => {
        console.log(response.data);
        response.data
          .forEach((r) => {
            console.log(r.idUser);
            if (r.idUser == this.$store.state.actualClient._id) {
              this.active = index;
            }
          })
          .catch((e) => {
            if (e.response.status === 401) {
              console.log(e);
              alert("Not find this vote");
            }
          });
      });
    },
    closeElection(election) {
      http
        .put("/election/closeElection", election)
        .then((response) => {
          alert("Election close !");
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteElection(election) {
      http
        .post("/election/deleteElection/", election)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    goJoinElection() {
      this.$router.push("/JoinVoteVue");
    },
    goCreateElection() {
      this.$router.push("/CreateElectionVue");
    },
    goShowResultats(election) {
      this.$store.state.actualElection = election;
      this.$router.push("/ShowResultatsVue");
    },
    redirection() {
      if (this.$store.state.actualClient === null) {
        this.$router.push("/");
      }
    },
  },
  mounted: function () {
    this.$nextTick(this.redirection);
    this.$nextTick(this.showElection);
  },
  components: { Header2 },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.is-visible {
  display: flex;
}

h1 {
  letter-spacing: -1px;
}

.name-election {
  width: 100px;
}

h4 {
  margin-left: 15px;
  margin-top: 10px;
  color: gray;
}

.progress {
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 15px;
  width: 150px;
  margin-right: 20px;
}

.progress-value {
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -8px #40e0d0;
  border-radius: 100px;
  background: #40e0d0;
  height: 10px;
  width: 0;
}

@keyframes load {
  0% {
    width: 0;
  }
  100% {
    width: 68%;
  }
}

/* .election-item {
  margin-right: 5px;
  margin-bottom: 10px;
} */

.formbg {
  margin: 0px auto;
  width: 100%;
  max-width: 80%;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  display: flex;
  flex-direction: column;
}

.election-items {
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto 25px;
  align-items: center;
  /* width:900px; */
}

.election-items .election-head {
  display: flex;
}

@media (max-width: 1200px) {
  .btns {
    display: flex;
    flex-direction: column;
  }

  .btn-home {
    margin-bottom: 5px;
  }
}

@media (max-width: 770px) {
  .election-items .election-head {
    flex-direction: column;
  }

  .election-head {
    align-items: center;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 560px) {
  .election-items {
    display: flex;
    flex-direction: column;
  }

  .name-election {
    text-align: center;
  }
  .progress {
    align-items: center;
    margin-bottom: 10px;
  }
}

.div-btn-btm {
  margin: 15px auto 30px;
}

.btn-home {
  background-color: #fff;
  margin-right: 45px;
  margin-left: 45px;
  width: 90px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: rgb(84, 105, 212);
  font-weight: 600;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  cursor: pointer;
  border: unset;
}

.btn-home:hover {
  color: #fff;
  background-color: rgb(84, 105, 212);
  transition: background-color 0.5s linear;
}

.btn-home-btm {
  background-color: rgb(84, 105, 212);
  width: 200px;
  margin-right: 45px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  cursor: pointer;
  border: unset;
}

/* .descript-election {
  animation: show 2s forwards;
} */

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.is-visible {
  display: flex;
}

.hidden {
  display: none;
}

.loginbackground {
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 70px;
  z-index: 0;
  overflow: hidden;
}

.flex-flex {
  display: flex;
}

.box-root {
  box-sizing: border-box;
}

.flex-direction--column {
  -ms-flex-direction: column;
  flex-direction: column;
}

.loginbackground-gridContainer {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: [start] 1fr [left-gutter] (86.6px) [ 16 ] [ left-gutter ] 1
    fr [ end ];
  grid-template-columns: [start] 1fr [left-gutter] repeat(16, 86.6px) [left-gutter] 1fr [end];
  -ms-grid-rows: [top] 1fr [top-gutter] (64px) [ 8 ] [ bottom-gutter ] 1 fr [
    bottom ];
  grid-template-rows: [top] 1fr [top-gutter] repeat(8, 64px) [bottom-gutter] 1fr [bottom];
  justify-content: center;
  margin: 0 -2%;
  transform: rotate(-12deg) skew(-12deg);
}

.box-divider--light-all-2 {
  box-shadow: inset 0 0 0 2px #e3e8ee;
}

.box-background--blue {
  background-color: #5469d4;
}

.box-background--white {
  background-color: #ffffff;
}

.box-background--blue800 {
  background-color: #212d63;
}

.box-background--gray100 {
  background-color: #e3e8ee;
}

.box-background--cyan200 {
  background-color: #7fd3ed;
}

.padding-top--64 {
  padding-top: 64px;
}

.padding-top--24 {
  padding-top: 24px;
}

.padding-top--48 {
  padding-top: 48px;
}

.padding-bottom--24 {
  padding-bottom: 24px;
}

.padding-horizontal--48 {
  padding: 48px;
}

.padding-bottom--15 {
  padding-bottom: 15px;
}

.flex-justifyContent--center {
  -ms-flex-pack: center;
  justify-content: center;
}

.listing a {
  color: #697386;
  font-weight: 600;
  margin: 0 10px;
}

.animationRightLeft {
  animation: animationRightLeft 2s ease-in-out infinite;
}

.animationLeftRight {
  animation: animationLeftRight 2s ease-in-out infinite;
}

.tans3s {
  animation: animationLeftRight 3s ease-in-out infinite;
}

.tans4s {
  animation: animationLeftRight 4s ease-in-out infinite;
}

@keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
