<template>
  <v-col cols="3">
    <v-card dark>
      <v-col cols="5">
        <span>solutionData:</span>
        <span>{{solutionData}}</span>
      </v-col>
      <v-col cols="5">
        <span>answersData:</span>
        <span>{{answersData}}</span>
      </v-col>
      <v-col cols="5">
        <span>hintsData:</span>
        <span>{{hintsData}}</span>
      </v-col>
    </v-card>
  </v-col>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "testcard",
  data: () => ({}),
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapMutations(["getToken", "getAssignment"])
  }
};
</script>