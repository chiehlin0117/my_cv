<template>
  <div id="main">
    <div class="chart-box">
      <h1>SKILL</h1>
      <hr />
      <div class="chart">
        <div
          class="chart-item"
          v-for="item in chart_data"
          :key="item"
          :style="{ height: item.value + '%' }"
          :class="item.name"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      chart_data: [
        { name: "JavaScript", value: 95 },
        { name: "Vue", value: 90 },
        { name: "Angular", value: 60 },
        { name: "jQuery", value: 70 },
        { name: "Css", value: 90 },
        { name: "Sass", value: 70 },
        { name: "C", value: 60 },
        { name: "PHP", value: 60 },
      ],
    };
  },
};
</script>

<style scoped>
.chart-box {
  padding: 8rem;
  background-color: #fafafe;
}
@media screen and (max-width: 576px) {
  .chart-box {
    padding: 5rem 0.5rem;
  }
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
.chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 400px;
  background-color: #fafafe;
  border-bottom: 5px solid #2c3e50;
}
.chart-item {
  /* border: 1px solid black; */
  background-color: #f05f40;
  width: 5%;
  position: relative;
  padding-top: 10px;
  color: #fafafe;
}
@media screen and (max-width: 576px) {
  .chart-item {
    width: 10%;
    position: relative;
    padding-top: 10px;
    font-size: 0.5rem;
  }
}
.chart-item:hover {
  background-color: #317f81;
  /* animation-name: animation; */
  animation-duration: 0.5s;
}
.chart-item:hover.chart-item::before {
  color: #317f81;
}
@keyframes animation {
  0% {
    height: 0;
  }
}
.JavaScript::before {
  content: "JavaScript";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.Vue::before {
  content: "Vue.js";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
  color: #aaaaaa;
}
.Angular::before {
  content: "Angular";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.jQuery::before {
  content: "jQuery";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.Css::before {
  content: "Css";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.Sass::before {
  content: "Sass";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.C::before {
  content: "C#";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.PHP::before {
  content: "PHP";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
</style>
