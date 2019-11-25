<template>
  <div>
    <v-row align="center" justify="center">
      <infoinput />
      <!-- <testcard /> -->
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GetAnswer",
  components: {
    infoinput: () => import("../components/infoinput.vue")
    // testcard: () => import("../components/testcard.vue")
  }
};
</script>