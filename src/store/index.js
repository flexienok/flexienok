import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseurl: "https://nokflex-api.nok.se/api/v2/assignment/solution/",
    solutionData: [],
    answersData: [],
    hintsData: [],
  },
  mutations: {
    getToken() {
      var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
      var b = [];
      var tokenLength = "1333";
      for (var i = 0; i < 1333; i++) {
        var j = (Math.random() * (a.tokenLength - 1)).toFixed(0);
        b[i] = a[j];
      }
      return b.join("");
    },
    getAssignment(CourseID, AssignmentID, AutherizationID) {
      this.loading = true;

      var url = this.baseurl + AssignmentID + "?courseId=" + CourseID;
      var headers = {
        authorization: "Bearer " + AutherizationID
      };
      var i = 0;
      var solutions = [];

      axios
        .get(url, {
          headers: headers
        })
        .then(function (response) {
          for (i = 0; i < response.data.solution.length; i++)
            solutions.push(response.data.solution[i])
        })
        .catch(error => {
          if (error.response.data.hasOwnProperty("message")) {
            solutions =
              "Err: " +
              error.response.status +
              "\n" +
              error.response.data.message;
          } else if (error.response.data.hasOwnProperty("error")) {
            solutions =
              "Err: " +
              error.response.status +
              "\n" +
              error.response.data.error;
          }

          console.log(error.response);

          document.getElementById("a").innerHTML = solutions;
          this.loading = false;
        });
    }
    // getAnswer() {
    //   // console.log(response.data.solution)
    //   // console.log(response.data.solution.length)
    //   var i = 0;
    //   for (i = 0; i < response.data.solution.length; i++) {
    //     console.log(response.data.solution[i]);
    //     // console.log(i)
    //     answers.push(response.data.solution[i].answers + "\n");
    //   }

    //   document.getElementById("a").innerHTML = answers;
    //   this.loading = false;
    // }
  },
  actions: {},
  modules: {}
})