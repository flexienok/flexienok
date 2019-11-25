<template>
  <v-app>
    <!-- <toolbar /> -->
    <bottomNav />

    <v-content class="grey darken-4">
      <v-fade-transition mode="out-in">
        <router-view class="px-8 py-8" />
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    // toolbar: () => import("./components/toolbar.vue"),
    bottomNav: () => import("./components/bottomNav.vue")
  }
};
</script>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>