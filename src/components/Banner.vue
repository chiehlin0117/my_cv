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
  height: 1000px;
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
@media screen and (max-width: 576px) {
  .banner {
    height: 100vh;
    background: url("../assets/banner.jpg");
    background-attachment: fixed;
    background-size: contain;
    background-position: bottom;
  }
  .viedo {
    display: none;
  }
  .nav_right {
    display: none;
  }
  .content {
    position: absolute;
    padding: 10px;
    top: 30%;
    left: 0%;
    text-align: center;
    text-shadow: 0px 0px 2px #fff;
  }
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
@media screen and (max-width: 576px) {
  .content p:nth-child(1) {
    font-size: 3rem;
  }
  hr {
    width: 80%;
  }
}
</style>
