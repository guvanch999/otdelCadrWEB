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
    await this.$axios.$get('/get-faculties',{
    }).then((response)=>{
      commit('setFacultetler',response);
    }).catch(err=>console.log(err));
  }
}

export const getters = {
  getFacultetler(state) {
    return state.facultetler
  },
}
