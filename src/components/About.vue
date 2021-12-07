<template>
  <div class="main">
    <h1>ABOUT</h1>
    <hr />
    <p>
      Hi, I am Chieh.<br />
      I have experienced to be Front-end Engineer for more than 1 years and
      participated some high quality projects.<br />
      I fell comfortable working in a team or individually and have <br />an
      in-depth interesting to emerging technologies.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f05f40;
  padding: 8rem;
}
@media screen and (max-width: 576px) {
  .main {
    padding: 5rem 1.5rem;
    text-align: left;
  }
}
h1 {
  margin: 0;
  font-size: 3rem;
  color: #fafafe;
  letter-spacing: 0.1rem;
}
@media screen and (max-width: 576px) {
  h1 {
    text-align: center;
  }
}
p {
  color: #fafafe;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
}
hr {
  margin: 2rem auto;
  height: 5px;
  background-color: #fafafe;
  width: 50px;
}
</style>
