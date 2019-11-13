<template>
  <v-row align="center" justify="center">
    <v-col cols="4">
      <v-card dark justify-center>
        <v-content>
          <v-container fluid fill-height>
            <v-form cols="2" ref="form" lazy-validation>
              <v-text-field v-model="CourseID" label="CourseID" required></v-text-field>
              <v-text-field v-model="AssignmentID" label="AssignmentID" required></v-text-field>
              <v-text-field v-model="AutherizationID" label="AutherizationID" required></v-text-field>
            </v-form>
            <v-btn color="info" class="mr-4" @click="get">getToken()</v-btn>
            <v-col>
              <v-btn
                color="success"
                class="mr-4"
                @click="validate"
                :loading="loading"
                :disabled="loading"
              >Get answer</v-btn>
            </v-col>

            <v-col>
              <v-btn color="error" class="mr-4" @click="loading = false">reset</v-btn>
            </v-col>
          </v-container>
        </v-content>
      </v-card>
      <v-flex xs12>
        <v-card dark>
          <span id="a"></span>
        </v-card>
      </v-flex>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

var baseurl = "https://nokflex-api.nok.se/api/v2/assignment/solution/";
export default {
  name: "infoinput",
  data: () => ({
    CourseID: "",
    AssignmentID: "",
    AutherizationID: "",
    loading: false
  }),

  methods: {
    ...mapMutations(["getToken"]),
    validate() {
      this.loading = true;

      var url = baseurl + this.AssignmentID + "?courseId=" + this.CourseID;
      var headers = {
        authorization: "Bearer " + this.getToken()
      };
      var i = 0;
      var answers = [];

      axios
        .get(url, { headers: headers })
        .then(function(response) {
          // console.log(response.data.solution)
          // console.log(response.data.solution.length)
          for (i = 0; i < response.data.solution.length; i++) {
            console.log(response.data.solution[i]);
            // console.log(i)
            answers.push(response.data.solution[i].answers + "\n");
          }

          document.getElementById("a").innerHTML = answers;
          this.loading = false;
        })
        .catch(error => {
          if (error.response.data.hasOwnProperty("message")) {
            answers =
              "Err: " +
              error.response.status +
              "\n" +
              error.response.data.message;
          } else if (error.response.data.hasOwnProperty("error")) {
            answers =
              "Err: " +
              error.response.status +
              "\n" +
              error.response.data.error;
          }

          console.log(error.response);

          document.getElementById("a").innerHTML = answers;
          this.loading = false;
        });
    }
  }
};
</script>