<template>
  <div>
    <infoinput />
    <testcard />
  </div>
</template>

<script>
export default {
  name: "GetAnswer",
  components: {
    infoinput: () => import("../components/infoinput.vue"),
    testcard: () => import("../components/testcard.vue")
  }
};
</script>