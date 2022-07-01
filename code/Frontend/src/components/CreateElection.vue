<template>
<!--  <p>CreateElection</p>-->
<!--  <div>-->
<!--    <label><b>Nom de l'election :</b></label>-->
<!--    <input name="nom" placeholder="nom du vote" type="text" v-model="nom" />-->
<!--    <label><b>Description :</b></label>-->
<!--    <input-->
<!--      name="description"-->
<!--      placeholder="description"-->
<!--      type="text"-->
<!--      v-model="description"-->
<!--    />-->
<!--    <label><b>URL logo :</b></label>-->
<!--    <input-->
<!--      name="urlImage"-->
<!--      placeholder="Entrez l'URL"-->
<!--      type="url"-->
<!--      v-model="urlImage"-->
<!--    />-->
<!--    <label><b>Nombre de votants :</b></label>-->
<!--    <input name="nombreVotants" type="number" v-model="limite" />-->

<!--    <div>-->
<!--      <input-->
<!--        type="radio"-->
<!--        id="informel"-->
<!--        name="typeElection"-->
<!--        v-bind:value="informel"-->
<!--        v-model="typeElection"-->
<!--        checked-->
<!--      />-->
<!--      <label for="informel">Informel</label>-->
<!--    </div>-->
<!--    <div>-->
<!--      <input-->
<!--        type="radio"-->
<!--        id="officiel"-->
<!--        name="typeElection"-->
<!--        v-bind:value="officiel"-->
<!--        v-model="typeElection"-->
<!--      />-->
<!--      <label for="officiel">Officiel</label>
    </div>

    <div>
      <input type="checkbox" id="preview" v-model="preview" />
      <label for="preview">Previsualisation des résultats ?</label>
    </div>

    <div>
      <div>
        <label><b>nom du choix A :</b></label>
        <input name="nomChoixA" placeholder="nom du choix" v-model="choixA" />
      </div>
      <div>
        <label><b>nom du choix B :</b></label>
        <input name="nomChoixB" placeholder="nom du choix" v-model="choixB" />
      </div>
    </div>
    <input type="submit" value="Créer" v-on:click="createElection" />-->



  <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
      <div class="loginbackground box-background--white padding-top--64">
        <div class="loginbackground-gridContainer">
          <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
            <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
            </div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
            <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
            <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
            <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
            <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
          </div>
        </div>
      </div>
      <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1>EKIP VOTE</h1>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15"><b>Create an election</b></span>
              <form id="stripe-login">
                <div class="flex">
                  <div class="field padding-bottom--24">
                    <label><b>Nom de l'election :</b></label><br>
                    <input type="text" name="nom" placeholder="Nom de l'election" v-model="nom" >
                  </div>

                    <div class="field padding-bottom--24">
                      <div>
                        <label><b>URL logo :</b></label><br>
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
                        <input name="nombreVotants" type="number" v-model="limite" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field padding-bottom--24">
                  <label><b>Description :</b></label><br>
                  <textarea type="text" name="description" class="description" placeholder="Description" v-model="description"></textarea>
                </div>

                <div class="flex_deux">
                  <div class="les_choix" id="les_choix">
                    <div class="choix">
                      <label>Nom du choix :</label><br>
                      <input name="nom_du_choix" placeholder="nom du choix"  />
                    </div>
                    <div class="choix">
                      <label>Nom du choix :</label><br>
                      <input name="nom_du_choix" placeholder="nom du choix"  />
                    </div>
                  </div>
                  <input type="button" value="Créer" v-on:click="addChoix" />

                </div>
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue" v-on:click="createElection">
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

export default {
  name: "CreateElection",
  data() {
    return {
      nom: "",
      description: "",
      urlImage: "",
      limite: Number,
      typeElection: "informel",
      /*choixA: "",
      choixB: "",
      choice: "",*/
      choix: [],
      resultats: [],
      dates: [],
      code: "",
    };
  },
  computed: {},
  methods: {
    createElection() {
      this.choix.push(this.choixA, this.choixB);
      this.dates.push(Date.now());
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
          alert("Election added");
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
      let boxChoix = document.getElementById("les_choix");

      let div = document.createElement("div");

      div.className="choix";

      let label = document
        .createElement("label");
      label.textContent = "Nom du choix:";
      div.appendChild(label);
      let br = document
          .createElement("br");
      div.appendChild(br);

      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "nom du choix");
      input.setAttribute("v-model", "choix");
      div.appendChild(input);

      let button = document.createElement("input");
      button.setAttribute("type", "submit");

      div.style.background = "#1c57b5";
      div.style.margin = "10px";
      div.style.height = "100px";

      boxChoix.appendChild(div);
    },
  },
  mounted: function () {},
};
</script>

<style scoped>

* {
  color: #1a1f36;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}

template
{
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
  -ms-grid-columns: [start] 1fr [left-gutter] (86.6px)[16] [left-gutter] 1fr [end];
  grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
  -ms-grid-rows: [top] 1fr [top-gutter] (64px)[8] [bottom-gutter] 1fr [bottom];
  grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
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
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
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
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px;
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

.flex{
  display: flex;
  justify-content: space-between;
  wrap-option: wrap;
}

.flex_deux{

}

.description{
  width: 100%;
  height: 100px;
}

input[name="urlImage"]{
  width: 350px;
}

.nombreVotant{
  width: 175px;
}

.les_choix{
  display: flex;
  flex-wrap: wrap;
}

.choix{
  background: #1c57b5;
  margin: 10px;
  height: 100px;
}

input[name="nom_du_choix"]{
  width: 80%;
}

</style>
