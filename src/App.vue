<template>
  <Nav />

  <router-view />
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Nav,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-size: 16px;
}
body {
  margin: 0;
}
img {
  width: 100%;
}
#app {
  /* font-family: Tahoma; */
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  margin: 0;
  font-size: 3rem;
}
</style>
