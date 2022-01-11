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
    await this.$axios.$get('/get-course',{
    }).then((response)=>{
      commit('setCourses',response.body);
    }).catch(err=>console.log(err));
  }
}

export const getters = {
  getCourses(state) {
    return state.coursess
  },
}
