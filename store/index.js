import {sidebarArray} from "~/settigns/sidebarSettigns";

export const state = () => ({
  sidebarMenus: sidebarArray,
  token: null
})

export const mutations = {
  setSelected(state, index) {
    state.sidebarMenus.forEach(x => x.selected = false);
    state.sidebarMenus[index].selected = true;
  },
  setToken(state, token) {
      state.token = token;

  }
}

export const actions = {
  async liginAction({commit}, data) {
    await this.$axios.$post('sign-in', data).then(response => {
      if (!response.error) {
        commit('setToken', response.body.token);
      } else {
        commit('setToken', null);
      }
    }).catch(err => console.log(err));
  }
}

export const getters = {
  getSidebarArray: s => s.sidebarMenus,
  getUserToken: s => s.token
}
