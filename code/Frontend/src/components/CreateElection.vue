<template>
  <Header2 v-if="$store.state.actualClient !== null"></Header2>
  <div class="login-root">
    <div
      class="box-root flex-flex flex-direction--column"
      style="min-height: 100vh;flex-grow: 1;"
    >
      <div class="loginbackground box-background--white padding-top--64">
        <div class="loginbackground-gridContainer">
          <div
            class="box-root flex-flex"
            style="grid-area: top / start / 8 / end;"
          >
            <div
              class="box-root"
              style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;"
            ></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div
              class="box-root box-divider--light-all-2 animationLeftRight tans3s"
              style="flex-grow: 1;"
            ></div>
          </div>
          <div
            class="box-root flex-flex"
            style="grid-area: 6 / start / auto / 2;"
          >
            <div
              class="box-root box-background--blue800"
              style="flex-grow: 1;"
            ></div>
          </div>
          <div
            class="box-root flex-flex"
            style="grid-area: 7 / start / auto / 4;"
          >
            <div
              class="box-root box-background--blue animationLeftRight"
              style="flex-grow: 1;"
            ></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div
              class="box-root box-background--gray100 animationLeftRight tans3s"
              style="flex-grow: 1;"
            ></div>
          </div>
          <div
            class="box-root flex-flex"
            style="grid-area: 2 / 15 / auto / end;"
          >
            <div
              class="box-root box-background--cyan200 animationRightLeft tans4s"
              style="flex-grow: 1;"
            ></div>
          </div>
          <div
            class="box-root flex-flex"
            style="grid-area: 3 / 14 / auto / end;"
          >
            <div
              class="box-root box-background--blue animationRightLeft"
              style="flex-grow: 1;"
            ></div>
          </div>
          <div
            class="box-root flex-flex"
            style="grid-area: 4 / 17 / auto / 20;"
          >
            <div
              class="box-root box-background--gray100 animationRightLeft tans4s"
              style="flex-grow: 1;"
            ></div>
          </div>
          <div
            class="box-root flex-flex"
            style="grid-area: 5 / 14 / auto / 17;"
          >
            <div
              class="box-root box-divider--light-all-2 animationRightLeft tans3s"
              style="flex-grow: 1;"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="box-root padding-top--24 flex-flex flex-direction--column"
        style="flex-grow: 1; z-index: 9;"
      >
        <div
          class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center"
        >
          <h1>EKIP VOTE</h1>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15"><b>Create an election</b></span>
              <form id="stripe-login">
                <div class="flex">
                  <div class="field padding-bottom--24">
                    <label><b>Nom de l'election :</b></label
                    ><br />
                    <input
                      type="text"
                      name="nom"
                      placeholder="Nom de l'election"
                      v-model="nom"
                    />
                  </div>

                  <div class="field padding-bottom--24">
                    <div>
                      <label><b>URL logo :</b></label
                      ><br />
                      <input
                        name="urlImage"
                        placeholder="Entrez l'URL"
                        type="url"
                        v-model="urlImage"
                      />
                    </div>
                  </div>
                  <div class="nombreVotant">
                    <div class="field padding-bottom--24">
                      <div>
                        <label><b>Nombre de votants :</b></label>
                        <input
                          name="nombreVotants"
                          type="number"
                          v-model="limite"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field padding-bottom--24">
                  <label><b>Description :</b></label
                  ><br />
                  <textarea
                    type="text"
                    name="description"
                    class="description"
                    placeholder="Description"
                    v-model="description"
                  ></textarea>
                </div>

                <div class="field padding-bottom--24">
                  <label><b>Date de fin:</b></label
                  ><br />
                  <input type="date" name="date" v-model="dateFin" />
                </div>

                <div class="flex_deux">
                  <div class="les_choix" id="les_choix" v-for="(choice, index) in choix" :key="choice">
                    <div class="choix">
                      <label class="label_choix">choix {{ index + 1 }}</label><br />
                      <div class="image">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                          style="max-width: 100%;max-height: 100%; border-radius: 5px"
                        />
                      </div>
                      <div class="les_fleches">
                        <button class="fleche gauche">
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/action-states-vol-3-flat/48/Action___States_-_Vol._3-19-512.png"
                            style="max-width: 90%;max-height: 90%;border-radius: 5px;"/>
                        </button>
                        <button class="fleche droite">
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/action-states-vol-3-flat/48/Action___States_-_Vol._3-19-512.png"
                            style="max-width: 90%;max-height: 90%;-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);-ms-transform: rotate(180deg);-o-transform: rotate(180deg);transform: rotate(180deg);border-radius: 5px"/>
                        </button>
                      </div>
                      <input name="nom_du_choix" type="text" placeholder="Nom" v-model="choice.value"/><br />
                      <label class="label_choix">Description du choix :</label><br />
                      <textarea type="text" placeholder="Description" class="description Dchoix" v-model="choice.desc"/>
                    </div>
                  </div>
                  <button class="button-A-E" type="button" value="Ajouter" v-on:click="addChoix" >Ajouter</button>
                  <input class="button-A-E" type="button" value="Enlever" v-on:click="delChoix" />
                </div>
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue" v-on:click="createElection"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
import Header2 from "@/components/Header2";

export default {
  name: "CreateElection",
  components: { Header2 },
  data() {
    return {
      nom: "",
      description: "",
      urlImage: "",
      limite: Number,
      typeElection: "informel",
      choix: [
        { value: "", desc: "" },
        { value: "", desc: "" },
      ],
      resultats: [],
      dateFin: Date,
      dates: [],
      code: "",
    };
  },
  computed: {},
  methods: {
    redirection() {
      if (this.$store.state.actualClient === null) {
        this.$router.push("/");
      }
    },
    createElection() {
      this.dates.push(Date.now(), this.dateFin);
      const newElection = {
        nom: this.nom,
        description: this.description,
        urlImage: this.urlImage,
        type: this.typeElection,
        choix: this.choix,
        resultats: this.resultats,
        dates: this.dates,
        limite: this.limite,
        code: this.code,
      };
      http
        .post("/election/createElection", newElection)
        .then((response) => {
                console.log(response.data);
                if (!this.$store.state.actualClient.autorisedElections.includes(response.data._id)) {
                  this.$store.state.actualClient.autorisedElections.push(response.data._id);
                  this.$store.state.actualClient.createdElections.push(response.data._id);
                  console.log("user avannt : ", this.$store.state.actualClient)
                  http.put("user/joinVote", this.$store.state.actualClient)
                      .then(r => {
                        console.log("response :", r);
                        this.$router.push("/HomePageVue");
                      });
                }
                else {
                  alert("You are already participating to this election");
                }
        })
        .catch((e) => {
          if (e.response.status === 500) {
            alert("Invalid data");
          } else {
            alert("DB error");
          }
          console.log(e);
        });
    },

    addChoix() {
      this.choix.push({ value: "" });
    },

    delChoix() {
      console.log("pop");
      this.choix.pop();
    },
  },
  mounted: function() {
    this.$nextTick(this.redirection);
  },
};
</script>

<style scoped>
* {
  color: #1a1f36;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Ubuntu, sans-serif;
}

template {
  overflow: hidden;
}

body {
  overflow: hidden;
  background-color: #ffffff;
}
h1 {
  letter-spacing: -1px;
}
a {
  color: #5469d4;
  text-decoration: unset;
}
.login-root {
  background: #fff;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
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
.align-center {
  align-items: center;
}
.center-center {
  align-items: center;
  justify-content: center;
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
  -ms-grid-columns: [start] 1fr [left-gutter] (86.6px) [16] [left-gutter] 1fr
    [end];
  grid-template-columns: [start] 1fr [left-gutter] repeat(16, 86.6px) [left-gutter] 1fr [end];
  -ms-grid-rows: [top] 1fr [top-gutter] (64px) [8] [bottom-gutter] 1fr [bottom];
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

.formbg {
  margin: 0px auto;
  width: 100%;
  max-width: 1000px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
}

span {
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
}
label {
  margin-bottom: 10px;
}

.field input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[name="submit"] {
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}
.field-checkbox input {
  width: 20px;
  height: 15px;
  margin-right: 5px;
  box-shadow: unset;
  min-height: unset;
}
.field-checkbox label {
  display: flex;
  align-items: center;
  margin: 0;
}

.footer-link span {
  font-size: 14px;
  text-align: center;
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

.flex {
  display: flex;
  justify-content: space-between;
  wrap-option: wrap;
}

.description {
  padding-left: 15px;
  padding-top: 5px;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border: unset;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px,
  rgb(0 0 0 / 0%) 0px 0px 0px 0px,
  rgb(0 0 0 / 0%) 0px 0px 0px 0px,
  rgb(60 66 87 / 16%) 0px 0px 0px 1px,
  rgb(0 0 0 / 0%) 0px 0px 0px 0px,
  rgb(0 0 0 / 0%) 0px 0px 0px 0px,
  rgb(0 0 0 / 0%) 0px 0px 0px 0px;
}

input[name="urlImage"] {
  width: 350px;
}

.nombreVotant {
  width: 175px;
}

.flex_deux {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-height: 500px;
}

.choix {
  background-color: #5469d4;
  flex-direction: row;
  margin: 25px;
  min-height: 450px;
  min-width: 250px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[name="nom_du_choix"] {
  width: 150px;
  display: block;
  margin: 0 auto;
  text-align: center;
}

.label_choix {
  display: block;
  text-align: center;
  color: white;
  font-weight: bold;
}

.image {
  width: 125px;
  height: 125px;
  margin: 0 auto;
}

.les_fleches {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
}

.fleche {
  width: 27px;
  height: 27px;
  background: white;
  border: transparent;
  border-radius: 8px;
}

.Dchoix{
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.button-A-E{
  flex-direction: row;
  margin: 25px;
  height: 450px;
  width: 250px;
  border-radius: 8px;
  border-color: transparent;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px;

}

.button_plus {
  position: absolute;
  width: 35px;
  height: 35px;
  background: #fff;
  cursor: pointer;
  border: 2px solid #095776;

  /* Mittig */
  top: 50%;
  left: 50%;
}

.button_plus:after {
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  height: 4px;
  width: 50%;
  background: #095776;
  top: 50%;
  left: 50%;
}

.button_plus:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #095776;
  height: 50%;
  width: 4px;
}

.button_plus:hover:before,
.button_plus:hover:after {
  background: #fff;
  transition: 0.2s;
}

.button_plus:hover {
  background-color: #095776;
  transition: 0.2s;
}
</style>
