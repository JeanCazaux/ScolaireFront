<template>
  <v-app class="grey lighten-5">
    <v-toolbar class="text-xs-center" color="white" fixed app dense>
      <v-btn
        flat
        icon
        color="black"
        style="max-width: 40px; min-width: 40px;"
        title="Ajouter un exercice"
      >
        <v-icon large>fa-play</v-icon>
      </v-btn>
      <v-btn
        flat
        icon
        color="grey"
        style="max-width: 40px; min-width: 40px;"
        title="Ajouter un exercice"
      >
        <v-icon large>fa-pause</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      Additions simples
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
        color="black"
        style="max-width: 40px; min-width: 40px;"
        title="Ajouter un exercice"
      >
        <v-icon large>fa-arrow-left</v-icon>
      </v-btn>
      1/2
      <v-btn
        flat
        icon
        color="black"
        style="max-width: 40px; min-width: 40px;"
        title="Ajouter un exercice"
      >
        <v-icon large>fa-arrow-right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-chip color="grey" text-color="white">
        <v-avatar>
          <v-icon>fa-hourglass-start</v-icon>
        </v-avatar>
        15
      </v-chip>
      <v-spacer></v-spacer>
      <v-btn
        :to="{ name: 'MathListe' }"
        flat
        icon
        style="max-width: 40px; min-width: 40px;"
        title="Ajouter un exercice"
      >
        <v-icon large>fa-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fluid>
      <v-layout align-center justify-center row fill-height>
        <v-flex style="text-align: center;">
          <div color="blue" class="cssOpeElement">60</div>
          <div color="blue" class="cssOpeElement">+</div>
          <div color="blue" class="cssOpeElement">5</div>
          <div color="blue" class="cssOpeElement">=</div>
          <div color="blue" class="cssOpeElement">&nbsp;</div>
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
    moment
  })
};
</script>

<style>
.cssOpeElement {
  display: inline-block;
  font-family: sans-serif;
  min-width: 100px;
  text-align: center;
  margin: 4px;
  font-size: 4em;
  border-bottom: 1px solid #ccc;
}
</style>
