export const state = () => ({
  studentList: [],
  studentDetail: {},
  totalCount:0,
  limit:20,
  page:0
})

export const mutations = {
  setStudentList(state, list) {
    if (list) {
      state.studentList = list;
    }
  },
  setPage(state,page){
    state.page=page;
  },
  setStudentDetail(state, data) {
    if (data) {
      state.studentDetail = data;
    } else {
      state.studentDetail = {}
    }
  }
}

export const actions = {
  async loadStudentList({commit},params) {
    await this.$axios.$get('/get-student', {
      params:{

      }
    }).then((response) => {
      commit('setStudentList', response);
    }).catch(err => console.log(err));
  },
  async addStudent({commit}, data) {
    return  await this.$axios.$post('/add-student', data).then(
      response => {
        console.log(response)
        if (response) {
          return true;
        } else return false;
      }
    ).catch(err => {
      console.log(err);
      return false;
    });
  },
  async loadStudentDetail({commit}, id) {
    await this.$axios.$get('/get-student-detail/' + id).then(response => {
        if (response) {
          commit('setStudentDetail', response);
        } else {
          commit('setStudentDetail', {});
        }
      }
    ).catch(err => {
      console.log(err);
      commit('setStudentDetail', {});
    })
  },
  async addStudentImage({commit},data){
    return await this.$axios.$put('/upload-image',data.form,{
      params:{
        id:data.studentID
      }
    }).then((response)=>{
      if(!response.error){
        console.log("image  requetst is: " +response);
        return true;
      } else return false;
    }).catch(err=>{
      console.log(err);
      return false;
    })
  },
  async addStudentDetail({commit},data){
    return  await this.$axios.$post('/add-student-detail',data).then(
      (response)=>{
        if(response){
          return true;
        } else {
          return  false;
        }
      }
    ).catch(err=>{
      console.log(err);
      return false;
    })
  },

}

export const getters = {
  getStudentList(state) {
    return state.studentList
  },
  getPageCount:s=>Math.ceil(s.totalCount/s.limit),

}
