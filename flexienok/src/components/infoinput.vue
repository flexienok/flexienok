<template>
  <v-col cols="4">
    <v-card dark justify-center class="width">
      <v-content>
        <v-container fluid fill-height>
          <v-col cols="6">
            <v-form cols="10" ref="form" lazy-validation>
              <v-text-field v-model="CourseID" label="CourseID" required></v-text-field>
              <v-text-field v-model="AssignmentID" label="AssignmentID" required></v-text-field>
              <v-text-field v-model="AutherizationID" label="AutherizationID" required></v-text-field>
            </v-form>
          </v-col>
          <v-col cols="6">
            <v-col>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Select Course</v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(course, index) in courses"
                    :key="index"
                    @click="CourseID = courses[index].id"
                  >
                    <v-list-item-title>{{ courses[index].bok }} - {{ courses[index].id }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col>
              <v-btn color="info" class="mr-4" @click="getToken">getToken()</v-btn>
            </v-col>
          </v-col>
          <v-col>
            <v-btn
              color="success"
              class="mr-4"
              @click="validate(), makeURL()"
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
    <v-card dark>
      <v-col>
        <v-text-field v-model="inputURL" label="paste url" required></v-text-field>

        <v-btn @click="parseUrl">test</v-btn>
      </v-col>
    </v-card>
    <v-flex xs12>
      <v-card >
        <span id="a"></span>
      </v-card>
    </v-flex>
  </v-col>
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
    inputURL: "",
    loading: false,
    courses: [
      { bok: "Matte 1a", id: "940" },
      { bok: "Matte 1b", id: "950" },
      { bok: "Matte 1c", id: "960" }
    ]
  }),

  methods: {
    ...mapMutations(["getToken"]),
    makeURL() {
      this.inputURL =
        "https://nokflex.nok.se/" +
        this.CourseID +
        "/uppgift/" +
        this.AssignmentID;
    },
    parseUrl(){ // do some parsing

    },
    validate() {
      this.loading = true;

      var url = baseurl + this.AssignmentID + "?courseId=" + this.CourseID;
      var headers = {
        authorization: "Bearer " + this.AutherizationID
      };
      var i = 0;
      var answers = [];

      axios
        .get(url, { headers: headers })
        .then(function(response) {
          // console.log(response.data.solution)
          // console.log(response.data.solution.length)

          for (i = 0; i < response.data.solution.length; i++) {
            console.log(response.data.solution);
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

<style>
.width {
  width: 400px;
}
</style>