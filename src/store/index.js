import { createStore } from 'vuex'

export default createStore({
  state: {
    projectName: "",
    project: [],
  },
  mutations: {
    projectOpen(state, data) {
      console.log(data)
      switch (data.url) {
        case 'DiamondBack':
          state.projectName = data.name
          state.project = [
            require("../assets/DiamondBack/DiamondBack1.png"),
            require("../assets/DiamondBack/DiamondBack2.png"),
            require("../assets/DiamondBack/DiamondBack3.png"),
            require("../assets/DiamondBack/DiamondBack4.png"),
            require("../assets/DiamondBack/DiamondBack5.png"),
            require("../assets/DiamondBack/DiamondBack6.png"),
          ];
          break;
        case 'RestBack':
          state.projectName = data.name
          state.project = [
            require("../assets/DiamondBack/DiamondBack1.png"),
            require("../assets/DiamondBack/DiamondBack2.png"),
            require("../assets/DiamondBack/DiamondBack3.png"),
            require("../assets/DiamondBack/DiamondBack4.png"),
            require("../assets/DiamondBack/DiamondBack5.png"),
            require("../assets/DiamondBack/DiamondBack6.png"),
          ];
          break;
        case 'JBsports':
          state.projectName = data.name
          state.project = [
            require("../assets/JBsports/sport.png")
          ];
          break;
        default:
          break;
      }

    },
    closeLightBox(state) {
      state.projectName = "";
      state.project = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
