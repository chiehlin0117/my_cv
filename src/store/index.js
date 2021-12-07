import { createStore } from 'vuex'

export default createStore({
  state: {
    projectName: "",
    project: [],
    projectEN: "",
    skillAnimation: false,
  },
  mutations: {
    projectOpen(state, data) {
      console.log(data)
      switch (data.url) {
        case 'DiamondBack':
          state.projectName = data.name
          state.projectEN = data.url
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
          state.projectEN = data.url
          state.project = [
            require("../assets/RestBack/restBack1.jpg"),
            require("../assets/RestBack/restBack2.jpg"),
            require("../assets/RestBack/restBack3.jpg"),
            require("../assets/RestBack/restBack4.jpg"),
            require("../assets/RestBack/restBack5.jpg"),
            require("../assets/RestBack/restBack6.jpg"),
            require("../assets/RestBack/restBack7.jpg"),
          ];
          break;
        case 'JBsports':
          state.projectName = data.name
          state.projectEN = data.url
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
