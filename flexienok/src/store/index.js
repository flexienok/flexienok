import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    URL: {
      solution: "https://nokflex-api.nok.se/api/v2/assignment/solution/",
      personalInfo: "https://nokflex-api.nok.se/api/v2/user/current/assignment?courseId=960",
      input: ""
    },
    CourseID: "",
    AssignmentID: "",
    AutherizationID: "",
    courses: [{
        bok: "Matte 1a",
        id: "940"
      },
      {
        bok: "Matte 1b",
        id: "950"
      },
      {
        bok: "Matte 1c",
        id: "960"
      }
    ],
  },
  mutations: {
    makeURL() {
      this.inputURL =
        "https://nokflex.nok.se/" +
        this.CourseID +
        "/uppgift/" +
        this.AssignmentID;
    },
    parseUrl() { // do some parsing 
      // regex patten: ^https://nokflex.nok.se/[0-9]{1,}/uppgift/[0-9]{1,}$
      var url = this.inputURL

      var res = url.replace("https://nokflex.nok.se/", "").split("/uppgift/") // parses url by removing prefix and splitting into a list

      this.CourseID = res[0]
      this.AssignmentID = res[1]

    },
  },
  actions: {},
  modules: {}
})