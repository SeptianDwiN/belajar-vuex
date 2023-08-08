import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import stasiun from "./modules/stasiun"

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    donatur,
    clients,
    transaksi,
    users,
    stasiun
  },
});

export default store;