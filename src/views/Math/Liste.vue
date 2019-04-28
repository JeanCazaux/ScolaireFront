<template>
  <v-app class="grey lighten-5 pa-5">
    <v-toolbar class="text-xs-center" color="white" fixed app dense>
      <v-icon size="20" class="pr-3">
        fa-calculator
      </v-icon>
      <h3>Math</h3>
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
        style="max-width: 40px; min-width: 40px;"
        title="Ajouter un exercice"
      >
        <v-icon large>fa-plus</v-icon>
      </v-btn>
      <v-btn
        flat
        icon
        style="max-width: 40px; min-width: 40px;"
        title="Paramétrage"
      >
        <v-icon large>fa-gear</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid grid-list-sm>
      <v-layout align-center justify-center row wrap>
        <v-flex
          v-for="(exercice, index) in exercices"
          :key="`exercice${index}`"
          xs3
        >
          <v-card class="ma-2">
            <v-card-title>
              <v-icon small left>
                fa-calculator
              </v-icon>
              <span class="title font-weight-light">{{ exercice.titre }}</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              <span class="grey--text">
                Nombre de calcul :
              </span>
              <span>12</span><br />
              <span>40+4=?</span>
            </v-card-text>
            <v-card-actions>
              <v-btn :to="{ name: 'MathExercice' }" flat color="orange">
                Commencer
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn flat icon style="max-width: 40px; min-width: 40px;">
                <v-icon>fa-gear</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import moment from "moment";

export default {
  name: "Exercice",

  data: () => ({
    moment,
    exercices: [
      { id: 1, titre: "Additions simples" },
      { id: 2, titre: "Comléments à 1000" },
      { id: 3, titre: "Dizaines + unités" },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 6 },
      { id: 6 },
      { id: 6 }
    ]
  })
};
</script>

<style></style>
