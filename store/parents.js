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
  },
  async addStudentParent({commit},data){
    await this.$axios.$post('/add-parent',data).then(
      response=>{
        if(response){
          return true;
        } else
          return  false;
      }
    ).catch((err)=>{
      console.log(err);
      return false;
    })
  }
}

export const getters = {
  getParentStatus(state) {
    return state.parentStatuses
  },
}
