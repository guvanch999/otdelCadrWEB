export const state = () => ({
  studentList: [],
  studentDetail: {},
  totalCount:0,
  limit:20,
  page:0,
  currentId:0,
  workPlaces:[],
  pageCount:0,
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
  },
  setAllStudents(state,data){
    if(data.students){
      state.studentList=data.students;
      state.pageCount=data.count;
    } else {
      state.studentList=[];
    }
  }
}

export const actions = {
  async loadAllStudents({commit},page){
    await this.$axios.$post('/get-students',{},{
      params:{
        page:page
      }
    }).then(response=>{
        if(response && !response.error){
          commit('setAllStudents',response.body);
        } else {
          commit('setAllStudents',[]);
        }
    }).catch(err=>{
      console.log(err);
      commit('setAllStudents',[]);
      }
    )
  },
  async addOptionalDetails({commit},data){
    return  await this.$axios.$post('/add-detail',data).then(response=>{
      if(response && !response.error){
        localStorage['optionalDetailId']=response.id;
        return true;
      } else return false;
    }).catch(err=>{
      console.log(err);
      return false;
    })
  },
  async getOptionalDetail({commit},studentId){
    return await this.$axios.$get('/get-detail',{
      params:{
        studentID:studentId
      }
    }).then(response=>{
      if(response && !response.error){
        console.log(response);
        return response.body[0];
      } else {
        return false;
      }
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
  async updateStudentById({commit},data){
    return await this.$axios.$put('/update-student',data.inf,{
      params:{
        id:data.currentId
      }
    }).then(response=>{
      if(response && !response.error){
        return true;
      } else {
        return false;
      }
    }).catch(err=>{
      console.log(err);
      return false;
    })
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
  },
  async addStudentTPDetail({commit},data){
    return await this.$axios.$post('/add-third-details',data)
      .then(response=>{
        if(response && !response.error){
          localStorage['thirdPartId']=response.id;
          return true;
        } else {
          return  false;
        }
      })
      .catch(err=>{
        console.log(err);
        return false;
      })

  },
  async updateStudentTPDetail({commit},data){
    return await this.$axios.$put('/update-third-details',data.inf,{
      params:{
        id:data.id
      }
    })
      .then(response=>{
        if(response && !response.error){
          return true;
        } else return false;
      })
      .catch(err=>{
        console.log(err);
        return false;
      })
  },
  async getTPDetail({commit},id){
    return await this.$axios.$get('/get-third-details',{
      params:{
        id:id
      }
    })
      .then(response=>{
        if(response && !response.error){
          return response.body[0];
        } else
          return  false;
      })
      .catch(err=>{
        console.log(err);
        return false;
      })
  },
  async updateFromServer({commit},data){
    return await this.$axios.$put('/update-detail',data.inf,{
      params:{
        studentID:data.id
      }
    }).then(response=>{
      if(response && !response.error){
        return true;
      } else {
        return false;
      }
    }).catch(err=>{
      console.log(err);
      return false;
    })
  },
  async updateStudentDetail({commit},data){
    return await this.$axios.$put('/update-student-detail',data.inf,{
      params:{
        id:data.detailId
      }
    }).then(response=>{
      if(response && !response.error){
        return true;
      } else {
        return false;
      }
    }).catch(err=>{
      console.log(err);
      return false;
    })
  },

}

export const getters = {
  getStudentList(state) {
    return state.studentList
  },
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
  getAllStudents:s=>s.studentList,
  getPageCount:s=>s.pageCount

}
