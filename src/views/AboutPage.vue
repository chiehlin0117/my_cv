<template>
  <div class="about">
    <About id="About" />
  </div>
</template>

<script>
// @ is an alias to /src

import About from "@/components/About.vue";

export default {
  name: "AboutPage",
  components: {
    About,
  },
};
</script>