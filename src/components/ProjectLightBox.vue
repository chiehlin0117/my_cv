<template>
  <div class="main" v-if="projectName != ''">
    <button @click="closeLightBox">X</button>
    <p v-if="projectEN == 'RestBack'">MOBILE</p>
    <p v-else>WEBSITE</p>
    <h1>{{ projectName }}</h1>
    <hr />
    <div
      class="websiteImg"
      v-for="item in project"
      :key="item"
      v-show="projectEN != 'RestBack'"
    >
      <img :src="item" alt="" />
    </div>
    <div
      v-show="projectEN == 'RestBack'"
      class="mobileImg"
      v-for="item in project"
      :key="item"
    >
      <img :src="item" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {};
  },
  computed: {
    project() {
      return this.$store.state.project;
    },
    projectName() {
      return this.$store.state.projectName;
    },
    projectEN() {
      return this.$store.state.projectEN;
    },
  },
  methods: {
    closeLightBox() {
      document.querySelector("body").style.overflowY = "scroll";
      this.$store.commit("closeLightBox");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: rgba(255, 255, 255);
  position: fixed;
  top: 0;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
.websiteImg {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.mobileImg {
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}
@media screen and (max-width: 576px) {
  .websiteImg {
    width: 90%;
  }
  .mobileImg {
    width: 90%;
  }
}
h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
  letter-spacing: 0.1rem;
}
@media screen and (max-width: 576px) {
  h1 {
    padding: 0 1rem;
  }
}
p {
  margin: 0;
  margin-top: 100px;
  color: #2c3e50;
  letter-spacing: 0.1rem;
}
hr {
  margin: 2rem auto;
  height: 5px;
  background-color: #f05f40;
  width: 50px;
}
button {
  background-color: white;
  border: 0;
  color: lightgray;
  font-size: 3rem;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
}
@media screen and (max-width: 576px) {
  button {
    top: 10px;
    right: 10px;
  }
}
</style>
