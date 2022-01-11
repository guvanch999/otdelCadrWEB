export const state = () => ({
    welayatlar:[]
})

export const mutations = {
  setWelayatlar(state,list){
    if(list){
      state.welayatlar=list;
    }
  }
}

export const actions = {
    async loadWelayatlar({commit}){
      await this.$axios.$get('/get-welayat',{
      }).then((response)=>{
          commit('setWelayatlar',response.body);
      }).catch(err=>console.log(err));
    }
}

export const getters = {
  getWelayatlar(state) {
    return state.welayatlar
  },
}
