<template>
  <div class="main">
    <div class="banner">
      <div class="viedo">
        <video autoplay :src="viedo" muted loop></video>
      </div>
      <div class="content">
        <p>
          I'M <br />
          CHIEH LIN .
        </p>
        <hr />
        <p>A FRONT-END ENGINEER & WEB DEVELOPER</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      viedo: require("../assets/banner.mp4"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  height: 100vh;
  overflow: hidden;
}
.viedo {
  position: relative;
  top: -30%;
}
.content {
  position: absolute;
  top: 23%;
  left: 50%;
  font-family: Arial;
  text-align: left;
}
p {
  margin: 0;
}
.content p:nth-child(1) {
  font-size: 4rem;
  font-weight: 1000;
  letter-spacing: 0.3rem;
}
.content p:nth-child(3) {
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
}
hr {
  background-color: #f05f40;
  border: #f05f40;
  height: 2px;
}
</style>
