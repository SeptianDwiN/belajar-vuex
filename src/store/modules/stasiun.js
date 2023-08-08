import axios from "axios";

const stasiun = {
  namespaced: true,
  state: {
    stasiunData: [],
  },
  getters: {
    getStasiun: (state) => state.stasiunData,
  },
  actions: {
    async fetchStasiun({ commit }) {
      try {
        const data = await axios.get(
          "https://booking.kai.id/api/stations2"
        );
        commit("SET_STASIUN", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_STASIUN(state, stasiun) {
      state.stasiunData = stasiun;
    },
  },
};

export default stasiun;