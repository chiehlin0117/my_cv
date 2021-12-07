<template>
  <div class="main">
    <h1>PROJECT</h1>
    <hr />
    <div class="project">
      <div class="project-item" v-for="item in Project_data" :key="item">
        <div
          class="img"
          :class="item.name"
          @click="goto(item.goto, item.lightBox, item.name)"
        >
          <img :src="item.img" alt="" />
          <div class="name">
            <p>{{ item.name }}</p>
          </div>
        </div>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      Project_data: [
        {
          name: "Diamond-Online 官網",
          content: "Angular",
          img: require("../assets/Diamondweb.png"),
          goto: "https://www.diamondonline.com.tw/official-website",
          lightBox: false,
        },
        {
          name: "Diamond-Online 後台",
          content: "JavaScript jQuery Ajax C# ASP.NET",
          img: require("../assets/Diamondback.png"),
          goto: "DiamondBack",
          lightBox: true,
        },
        {
          name: "Diamond-Online 實體店鋪控管平台",
          content: "Vue.js Vue-cli Vuex Vue-router axios",
          img: require("../assets/Diamondrest.png"),
          goto: "RestBack",
          lightBox: true,
        },
        {
          name: "jbot深度會員資訊",
          content: "JavaScript jQuery Ajax",
          img: require("../assets/JB.jpg"),
          goto: "JBsports",
          lightBox: true,
        },
        {
          name: "偵茶者",
          content: "Vue.js jQuery Gulp PHP",
          img: require("../assets/tea.jpg"),
          goto: "https://tibamef2e.com/ced101/project/g2/index.html",
          lightBox: false,
        },
        {
          name: "ZOEY Dance studio",
          content: "JavaScript jQuery",
          img: require("../assets/zoey.jpg"),
          goto: "https://chiehlin23.github.io/works/",
          lightBox: false,
        },
      ],
    };
  },
  methods: {
    goto(url, lightBox, name) {
      if (lightBox) {
        document.querySelector("body").style.overflow = "hidden";
        this.$store.commit("projectOpen", { url: url, name: name });
      } else {
        window.open(url);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background: url("../assets/background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 8rem;
}
@media screen and (max-width: 576px) {
  .main {
    padding: 5rem 0;
    background-size: contain;
  }
}
.project {
  display: flex;
  /* border: 1px solid black; */
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.project-item {
  margin: 1rem;
  width: 13rem;
}
@media screen and (max-width: 576px) {
  .project {
    width: 100%;
  }
}
.img {
  position: relative;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px black;
}
.img .name {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: rgb(0, 0, 0, 0.5);
  display: none;
}
.img .name p {
  margin: 0;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.img:hover .name {
  display: block;
}
h1 {
  margin: 0;
  font-size: 3rem;
  color: #fafafe;
  letter-spacing: 0.1rem;
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
