<template>
  <div id="nav">
    <!-- <router-link to="/about">About</router-link> -->
    <div
      class="nav_left"
      @click="
        Submit('Banner');
        Home();
      "
    >
      <p>CHIEH LIN</p>
      <p>Front-end Engineer</p>
    </div>
    <div class="nav_right">
      <div
        :class="navClassHome"
        @click="
          Submit('Banner');
          Home();
        "
      >
        Home
      </div>
      <div
        :class="navClassAbout"
        @click="
          Submit('About');
          About();
        "
      >
        About
      </div>
      <div
        :class="navClassSkill"
        @click="
          Submit('Skill');
          Skill();
        "
      >
        Skill
      </div>
      <div
        :class="navClassProject"
        @click="
          Submit('Project');
          Project();
        "
      >
        Project
      </div>
      <div
        :class="navClassCareer"
        @click="
          Submit('Career');
          Career();
        "
      >
        Career
      </div>
      <div
        :class="navClassContact"
        @click="
          Submit('Contact');
          Contact();
        "
      >
        Contact
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      scrollTop: [],
      navClassHome: "nav_items_click",
      navClassAbout: "nav_items",
      navClassSkill: "nav_items",
      navClassProject: "nav_items",
      navClassCareer: "nav_items",
      navClassContact: "nav_items",
    };
  },
  methods: {
    Home() {
      this.navClassHome = "nav_items_click";
      this.navClassAbout = "nav_items";
      this.navClassSkill = "nav_items";
      this.navClassProject = "nav_items";
      this.navClassCareer = "nav_items";
      this.navClassContact = "nav_items";
    },
    About() {
      this.navClassHome = "nav_items";
      this.navClassAbout = "nav_items_click";
      this.navClassSkill = "nav_items";
      this.navClassProject = "nav_items";
      this.navClassCareer = "nav_items";
      this.navClassContact = "nav_items";
    },
    Skill() {
      this.navClassHome = "nav_items";
      this.navClassAbout = "nav_items";
      this.navClassSkill = "nav_items_click";
      this.navClassProject = "nav_items";
      this.navClassCareer = "nav_items";
      this.navClassContact = "nav_items";
    },
    Project() {
      this.navClassHome = "nav_items";
      this.navClassAbout = "nav_items";
      this.navClassSkill = "nav_items";
      this.navClassProject = "nav_items_click";
      this.navClassCareer = "nav_items";
      this.navClassContact = "nav_items";
    },
    Career() {
      this.navClassHome = "nav_items";
      this.navClassAbout = "nav_items";
      this.navClassSkill = "nav_items";
      this.navClassProject = "nav_items";
      this.navClassCareer = "nav_items_click";
      this.navClassContact = "nav_items";
    },
    Contact() {
      this.navClassHome = "nav_items";
      this.navClassAbout = "nav_items";
      this.navClassSkill = "nav_items";
      this.navClassProject = "nav_items";
      this.navClassCareer = "nav_items";
      this.navClassContact = "nav_items_click";
    },
    Submit(key) {
      let pageId = document.querySelector("#" + key);
      let navHeight = document.querySelector("#nav");
      // console.log(pageId.offsetTop - navHeight.offsetHeight);
      window.scrollTo({
        top: pageId.offsetTop - navHeight.offsetHeight,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.scrollTop = [];
      let key = ["Banner", "About", "Skill", "Project", "Career", "Contact"];
      let navHeight = document.querySelector("#nav");
      for (let i = 0; i < key.length; i++) {
        let pageId = document.querySelector("#" + key[i]);
        this.scrollTop.push(pageId.offsetTop - navHeight.offsetHeight);
      }
      let scrollHeight = window.scrollY;
      if (scrollHeight >= 0 && scrollHeight < this.scrollTop[1]) {
        this.$store.state.skillAnimation = false;
        this.Home();
      } else if (
        scrollHeight >= this.scrollTop[1] &&
        scrollHeight < this.scrollTop[2]
      ) {
        this.$store.state.skillAnimation = false;
        this.About();
      } else if (
        scrollHeight >= this.scrollTop[2] &&
        scrollHeight < this.scrollTop[3]
      ) {
        this.$store.state.skillAnimation = true;
        this.Skill();
      } else if (
        scrollHeight >= this.scrollTop[3] &&
        scrollHeight < this.scrollTop[4]
      ) {
        this.$store.state.skillAnimation = false;
        this.Project();
      } else if (
        scrollHeight >= this.scrollTop[4] &&
        scrollHeight < this.scrollTop[5]
      ) {
        this.$store.state.skillAnimation = false;
        this.Career();
      } else if (scrollHeight >= this.scrollTop[5]) {
        this.$store.state.skillAnimation = false;
        this.Contact();
      }
    },
  },
  mounted() {},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 1;
}
.nav_left {
  letter-spacing: 0.5rem;
  cursor: pointer;
  color: #aaaaaa;
}

.nav_left p:nth-child(1) {
  font-size: 1.4rem;
  font-weight: 1000;
}
.nav_right {
  display: flex;
  justify-content: space-evenly;
}
@media screen and (max-width: 576px) {
  .nav_right {
    display: none;
  }
}
.nav_right div:hover {
  color: #317f81;
}
.nav_items {
  margin-right: 2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  color: #aaaaaa;
}
.nav_items_click {
  margin-right: 2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  color: #317f81;
}
</style>
