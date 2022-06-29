<template>
  <p>CreateElection</p>
  <form>
    <div>
      <label><b>Nom de l'election :</b></label>
      <input name="nom" placeholder="nom du vote" type="text" v-model="nom" />
      <label><b>Description :</b></label>
      <input
        name="description"
        placeholder="description"
        type="text"
        v-model="description"
      />
      <label><b>URL logo :</b></label>
      <input
        name="urlImage"
        placeholder="Entrez l'URL"
        type="url"
        v-model="urlImage"
      />
      <label><b>Nombre de votants :</b></label>
      <input name="nombreVotants" type="number" v-model="limite" />

      <div>
        <input
          type="radio"
          id="informel"
          name="typeElection"
          value="informel"
          v-model="typeElection"
          checked
        />
        <label for="informel">Informel</label>
      </div>
      <div>
        <input
          type="radio"
          id="officiel"
          name="typeElection"
          value="officiel"
          v-model="typeElection"
        />
        <label for="officiel">Officiel</label>
      </div>

      <div id="box-choix">
        <div>
          <label><b>Nom du choix:</b></label>
          <input type="text" placeholder="nom du choix" v-model="choixA" />
        </div>
        <div>
          <label><b>Nom du choix:</b></label>
          <input type="text" placeholder="nom du choix" v-model="choixB" />
        </div>
        <div>
          <input type="button" value="Ajouter" v-on:click="addChoix" />
        </div>
      </div>
      <input type="submit" value="Créer" v-on:click="createElection" />
    </div>
  </form>
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
      choixA: "",
      choixB: "",
      choice: "",
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
      let boxChoix = document.getElementById("box-choix");

      let div = document.createElement("div");
      let label = document
        .createElement("label")
        .appendChild(document.createElement("b"));
      label.textContent = "Nom du choix:";
      div.appendChild(label);

      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "nom du choix");
      input.setAttribute("v-model", "choice");
      div.appendChild(input);

      let button = document.createElement("input");
      button.setAttribute("type", "submit");

      boxChoix.appendChild(div);
    },
  },
  mounted: function() {},
};
</script>

<style scoped></style>
