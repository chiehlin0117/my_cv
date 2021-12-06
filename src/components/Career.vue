<template>
  <div class="main">
    <h1>CAREER</h1>
    <hr />
    <div class="part">
      <div class="left">
        <p class="date">2021-Now</p>
        <p class="company">復旦電競股份有限公司</p>
        <p class="name">Front-end Engineer</p>
      </div>
      <div class="right">
        <p class="date">2020-2021</p>
        <p class="company">Tibame</p>
        <p class="name">Front-end Trainee</p>
      </div>
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
  },
  methods: {
    closeLightBox() {
      document.querySelector("body").style.overflow = "scroll";
      this.$store.commit("closeLightBox");
    },
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 8rem;
}
h1 {
  margin: 0;
  font-size: 3rem;
  color: #2c3e50;
  letter-spacing: 0.1rem;
}
hr {
  margin: 2rem auto;
  height: 5px;
  background-color: #f05f40;
  width: 50px;
  border: 0;
}
p {
  margin: 0;
  color: #2c3e50;
  line-height: 2rem;
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
.part {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
}
.left,
.right {
  width: 400px;
}
.right {
  border-left: 4px solid #f05f40;
  position: relative;
  text-align: left;
  padding-left: 50px;
}
.right::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -17px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f05f40;
}
.right::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: -17px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f05f40;
}
.left {
  margin-top: 100px;
  position: relative;
  text-align: right;
  padding-right: 50px;
  height: 200px;
}
.left::before {
  content: "";
  position: absolute;
  top: -3px;
  right: -17px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f05f40;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  margin: 0;
}
</style>
