<template>
  <div id="main">
    <div class="chart-box">
      <h1>SKILL</h1>
      <hr />
      <div class="chart">
        <div
          v-for="item in chart_data"
          :key="item"
          :style="{ height: item.value + '%' }"
          :class="chart_item"
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
      chart_item: "chart-item",
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
  computed: {
    skillAnimation() {
      return this.$store.state.skillAnimation;
    },
  },
  watch: {
    skillAnimation: function () {
      if (this.skillAnimation) {
        this.chart_item = "chart-item animation";
      } else {
        this.chart_item = "chart-item";
      }
    },
  },
};
</script>

<style scoped>
.chart-box {
  padding: 8rem 15rem;
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
  height: 300px;
  background-color: #fafafe;
  border-bottom: 5px solid #2c3e50;
}
@keyframes animation {
  0% {
    height: 0;
  }
}

.chart-item {
  /* border: 1px solid black; */
  background-color: #f05f40;
  width: 5%;
  position: relative;
  padding-top: 10px;
  color: #fafafe;
}
.animation {
  animation-name: animation;
  animation-duration: 1s;
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

.chart-item:nth-child(1):before {
  content: "JavaScript";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.chart-item:nth-child(2):before {
  content: "Vue.js";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.chart-item:nth-child(3):before {
  content: "Angular";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.chart-item:nth-child(4):before {
  content: "jQuery";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.chart-item:nth-child(5):before {
  content: "Css";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.chart-item:nth-child(6):before {
  content: "Sass";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.chart-item:nth-child(7):before {
  content: "C#";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
.chart-item:nth-child(8):before {
  content: "PHP";
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  color: #aaaaaa;
}
</style>
