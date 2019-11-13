<template>
  <infoinput />
</template>

<script>
export default {
  components: {
    infoinput: () => import("../components/infoinput.vue")
  }
};
</script>