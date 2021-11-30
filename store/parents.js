export const state = () => ({
  parentStatuses:[]
})

export const mutations = {
  setParentStatuses(state,list){
    if(list){
      state.parentStatuses=list;
    }
  }
}

export const actions = {
  async loadParentStatuses({commit}){
    await this.$axios.$get('/get-parent-status',{
    }).then((response)=>{
      commit('setParentStatuses',response);
    }).catch(err=>console.log(err));
  }
}

export const getters = {
  getParentStatus(state) {
    return state.parentStatuses
  },
}
