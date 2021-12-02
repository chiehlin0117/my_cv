<template>
  <div class="home">
    <Banner id="Banner" />
    <About id="About" />
    <Skill id="Skill" />
    <Project id="Project" />
    <Career id="Career" />
    <Contact id="Contact" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Skill from "@/components/Skill.vue";
import Project from "@/components/Project.vue";
import Career from "@/components/Career.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Skill,
    Project,
    Career,
    Contact,
  },
};
</script>

