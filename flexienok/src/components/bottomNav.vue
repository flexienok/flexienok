<template>
  <v-bottom-navigation :value="activeBtn" color="error">
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-apple-safari</v-icon>
    </v-btn>
    <v-btn to="/About">
      <span>About</span>
      <v-icon>mdi-android-messages</v-icon>
    </v-btn>
    <v-btn to="/GetAnswer">
      <span>Hämta Lösning</span>
      <v-icon>mdi-calendar-export</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import paths from "@/router/paths";

export default {
  data: () => ({
    activeBtn: 1
  }),
  computed: {
    links() {
      return paths;
    }
  }
};
</script>