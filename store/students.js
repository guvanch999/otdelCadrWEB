export const state = () => ({
  studentList: [],
  studentDetail: {}
})

export const mutations = {
  setStudentList(state, list) {
    if (list) {
      state.studentList = list;
    }
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
  async loadStudentList({commit}) {
    await this.$axios.$get('/get-student', {}).then((response) => {
      commit('setStudentList', response);
    }).catch(err => console.log(err));
  },
  async addStudent({commit}, data) {
    await this.$axios.$post('/add-student', data).then(
      response => {
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
  async addStudentDetail({commit},data){
    await this.$axios.$post('/add-student-detail',data).then(
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
  }
}

export const getters = {
  getStudentList(state) {
    return state.studentList
  },
}
