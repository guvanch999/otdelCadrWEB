export const state = () => ({
  facultetler:[]
})

export const mutations = {
  setFacultetler(state,list){
    if(list){
      state.facultetler=list;
    }
  }
}

export const actions = {
  async loadFacultetler({commit}){
    await this.$axios.$get('/get-faculty',{
    }).then((response)=>{
      console.log(response);
      commit('setFacultetler',response.body);
    }).catch(err=>console.log(err));
  }
}

export const getters = {
  getFacultetler(state) {
    return state.facultetler
  },
}
