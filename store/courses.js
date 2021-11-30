export const state = () => ({
  coursess:[]
})

export const mutations = {
  setCourses(state,list){
    if(list){
      state.coursess=list;
    }
  }
}

export const actions = {
  async loadCourses({commit}){
    await this.$axios.$get('/get-courses',{
    }).then((response)=>{
      commit('setCourses',response);
    }).catch(err=>console.log(err));
  }
}

export const getters = {
  getCourses(state) {
    return state.coursess
  },
}
