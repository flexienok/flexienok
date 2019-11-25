
<template>
  <div class="home">
    <v-row align="center" justify="center">
      <v-container>
        <v-content class="px-8 py-8">
          <v-row align="center" justify="center">
            <span class="titel">Välkommen till FlexieNok</span>
          </v-row>
          <v-row align="center" justify="center">
            <span class="subtext">Detta är absolut inte ett fusk! Bara ett hälpmedel. ;)</span>
          </v-row>
        </v-content>
      </v-container>
    </v-row>

    <v-row align="center" justify="center">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 24 : 2"
          to="/GetAnswer"
          width="350"
          color="darkness"
          raised
          outlined
        >
          <v-content class="px-8 py-8">
            <v-row align="center" justify="center">
              <v-btn large disable>Hämta ditt ditt svar</v-btn>
            </v-row>
            <v-row align="center" justify="center">
              <img alt="Vue logo" src="../assets/favicon.png" />
            </v-row>
          </v-content>
        </v-card>
      </v-hover>
    </v-row>
  </div>
</template>

<style scoped>
.titel {
  font-family: verdana;
  font-size: 60px;
  color: red;
}
.subtext {
  font-family: verdana;
  font-size: 20px;
  color: red;
}
</style>