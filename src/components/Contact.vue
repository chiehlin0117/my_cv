<template>
  <div class="main">
    <h1>CONTACT</h1>
    <hr />
    <div class="part">
      <div class="photo_box">
        <div class="photo"><img :src="photo" alt="" /></div>
      </div>
      <p>Lin Chieh</p>
      <p><i class="fas fa-mobile-alt"></i> 0953-127-989</p>
      <p><i class="fas fa-envelope"></i> chiehlin0117@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      photo: require("../assets/myPhoto.jpg"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo_box {
  padding: 2px;
  border: 2px solid #fff;
  width: 208px;
  margin: 0 auto;
  border-radius: 50%;
}
.photo {
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  background-color: rgb(31, 30, 30);
}
.main {
  background: url("../assets/background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 8rem;
  height: 80vh;
}
@media screen and (max-width: 576px) {
  .main {
    padding: 5rem 0;
    height: auto;
    background-size: contain;
  }
}
h1 {
  margin: 0;
  font-size: 3rem;
  color: #fff;
  letter-spacing: 0.1rem;
}
hr {
  margin: 2rem auto;
  height: 5px;
  background-color: #fff;
  width: 50px;
  border: 0;
}
p {
  color: #fff;
  letter-spacing: 0.1rem;
}
.date {
  color: #f05f40;
  font-weight: bold;
}
.company {
  /* font-size: 1.5rem; */
  color: #2c3e50;
}
.name {
  font-weight: bold;
  color: #2c3e50;
}
</style>
