import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
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
    }
  },
  actions: {},
  modules: {}
})