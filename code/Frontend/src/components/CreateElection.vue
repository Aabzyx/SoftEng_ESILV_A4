<template>
  <p>CreateElection</p>
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
    <input type="submit" value="Créer" v-on:click="createElection" />
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
      choixA: "",
      choixB: "",
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
  },
  mounted: function() {},
};
</script>

<style scoped></style>
