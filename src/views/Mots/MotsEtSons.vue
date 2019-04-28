<template>
  <v-app id="scolaire" class="grey lighten-5 pa-5">
    <table>
      <tr v-for="mot in motInfos" :key="mot.mot">
        <td>{{ mot.mot }}</td>
        <td>{{ mot.son }}</td>
      </tr>
    </table>
  </v-app>
</template>

<script>
import moment from "moment";

export default {
  name: "MotsEtSons",

  data: () => ({
    moment,
    sons: ["ga", "teau", "le", "eau", "co", "be", "pou", "ou", "ille"],
    mots: ["gateau", "école", "abeille", "chat", "poule"],
    motInfos: []
  }),

  mounted() {
    // Triller les sons pas taille
    this.sons = this.sons.sort((a, b) => {
      return b.length - a.length;
    });

    // Formattage des sons (eau => |e.a.u|)
    let sonFormats = [];
    this.sons.forEach(son => {
      let format = "";
      for (let i = 0; i < son.length; i++) {
        if (format !== "") {
          format += ".";
        }
        format += son[i];
      }
      format = `|${format}|`;
      sonFormats.push({
        son: son,
        format: format
      });
    });
    this.sons = sonFormats;

    // Lancer la découpe des mots par sons
    this.traiteMots();
  },

  methods: {
    // Découpe des mots par sons
    traiteMots() {
      // Pour chacun des mots
      this.mots.forEach(mot => {
        let motDecoupe = mot.toLowerCase();

        // Pour chacun des sons
        this.sons.forEach(son => {
          motDecoupe = motDecoupe.split(son.son).join(`${son.format}`);
        });
        motDecoupe = motDecoupe.split("||").join("|");
        motDecoupe = motDecoupe.split(".").join("");

        this.motInfos.push({
          mot: mot,
          son: motDecoupe
        });
      });
    }
  }
};
</script>

<style></style>
