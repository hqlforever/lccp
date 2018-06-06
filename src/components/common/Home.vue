<template>
    <div>
        <v-head></v-head>
        <router-view></router-view>
        <v-foot></v-foot>
    </div>
</template>

<script>
import vHead from "./Header.vue";
import vFoot from "./Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    vHead,
    vFoot
  }
};
</script>

<style>
</style>
