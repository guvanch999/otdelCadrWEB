export const state = () => ({
  studentList: [],
  studentDetail: {},
  totalCount:0,
  limit:20,
  page:0,
  currentId:0,
  workPlaces:[]
})

export const mutations = {
  setWorkPlaces(st,data){
    if(data){
      st.workPlaces=data;
    } else {
      st.workPlaces=[];
    }
  },
  removePlace(st,index){
    st.workPlaces=st.workPlaces.filter(x=>x.id!==index);
  },
  setWorkPlace(st,place){
    st.workPlaces.push(place);
  },
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
  },
  setCurrentId(state,newId){
    if(newId){
      state.currentId=newId;
    } else {
      state.currentId=0;
    }
  }
}

export const actions = {
  async addOptionalDetails({commit},data){
    return  await this.$axios.$post('/add-detail',data).then(response=>{
      if(response && !response.error){
        return true;
      } else return false;
    }).catch(err=>{
      console.log(err);
      return false;
    })
  },
  async addWorkPlase({commit},data){
   return  await this.$axios.$post('/add-islan-yerleri',data).then(response=>{
      if(response && !response.error){
            let temp=Object.assign({},data);
            temp.id=response.id;
            commit('setWorkPlace',temp);
            return true;
      } else return false;
    }).catch(err=>{
      console.log(err)
      return false;
    });
  },
  async deleteWorkPlace({commit},id){
    return  await this.$axios.delete('/delete-islan-yerleri',{
      params:{
        id:id
      }
    }).then(response=>{
      if(response && !response.error){
        commit('removePlace',id);
        return true
      } else return false;
    }).catch(err=>{
      console.log(err);
      return false;
    })
  },
  async loadWorkPlaces({commit},stidentId){
    await this.$axios.$get('/get-islan-yerleri',{
      params:{
        studentID:stidentId
      }
    }).then(response=>{
      if(response && !response.error){
        commit('setWorkPlaces',response.body);
      }
    }).catch(err=>console.log(err));
  },
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
        if (response && !response.error) {
          localStorage['id']=response.id;
          commit('setCurrentId',response.id)
          return true;
        } else return false;
      }
    ).catch(err => {
      console.log(err);
      return false;
    });
  },
  async getStudentById({commit},id){
    return  await this.$axios.$get('/get-student',{
      params:{
        id:id
      }
    }).then(response => {
        if (response && !response.error) {
          return response.body;
        } else {
          return  false;
        }
      }
    ).catch(err => {
      console.log(err);
      return false;
    })
  },
  async loadStudentDetail({commit}, id) {
     return  await this.$axios.$get('/get-student-detail',{
       params:{
         id:id
       }
     }).then(response => {
        if (response && !response.error) {
          return response[0]
        } else {
          return false;
        }
      }
    ).catch(err => {
      console.log(err);
      return false;
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
        if(response && !response.error){
          localStorage['detailId']=response.id;
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
  getPageCount:s=>Math.ceil(s.totalCount/s.limit),
  getCurrentId:st=>{
    if(st.currentId){
      return st.currentId;
    } else {
      if(localStorage['id']){
        return localStorage['id'];
      }
    }
  },
  getWorkedPlaces:s=>s.workPlaces,

}
