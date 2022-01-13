import {popParams} from "vuelidate/lib/params";

export const state = () => ({
  parentStatuses:[],
  parents:[]
})

export const mutations = {
  setParentStatuses(state,list){
    if(list){
      state.parentStatuses=list;
    } else {
      state.parentStatuses=[]
    }
  },
  setParents(state,list){
    if(list){
      state.parents=list;
    } else {
      state.parents=[]
    }
  },
  pushParent(st,data){
    if(data){
      st.parents.push(data);
    }
  }
}

export const actions = {
  async loadParentStatuses({commit}){
    await this.$axios.$get('/get-parent-status',{
    }).then((response)=>{
      if(response && !response.error){
        commit('setParentStatuses',response.body);
      } else commit('setParentStatuses',[]);
    }).catch(err=>{
      console.log(err)
      commit('setParentStatuses',[]);
    });
  },
  async addStudentParent({commit},data){
    return  await this.$axios.$post('/add-parent',data).then(
      response=>{
        if(response){
          if(response && !response.error){
            let temp=Object.assign({},data);
            temp.id=response.id;
            commit('pushParent',temp);
            return true;
          } else {
            return false;
          }
        } else
          return  false;
      }
    ).catch((err)=>{
      console.log(err);
      return false;
    })
  },
  async loadParents({commit},id){
    await this.$axios.$get('/get-parent',{
      params:{
        studentID:id
      }
    }).then(response=>{
      if(response && !response.error){
        commit('setParents',response.body);
      }
    }).catch(err=>{
      console.log(err);
      return false;
    })
  }

}

export const getters = {
  getParentStatus(state) {
    return state.parentStatuses
  },
  getParents:s=>s.parents
}
