<template>
  <div>
    <parentComponent @removeFrom="detetedParent" v-for="parent in parents"  :parent="parent" :key="parent.id"/>
    <table>
      <thead>
      <th style="width:200px">
        Garyndaşlyk derejesi
      </th>
      <th>
        Ady
      </th>
      <th>
        Familiýasy
      </th>
      <th>
        Atasynyň ady
      </th>
      <th style="width:200px">
        Doglan güni
      </th>
      <th style="width:160px">
        Kaziýete çekilenmi?
      </th>
      </thead>
      <tbody>
      <tr>
        <td>
          <b-dropdown class="inputClasss" :text="parentStatusText" variant="light">
            <b-dropdown-item v-for="status in parentStatus" :key="status.id"
            @click="changeStatus(status.id)">{{
              status.name
              }}</b-dropdown-item>
          </b-dropdown>
        </td>
        <td>
          <b-input type="text" :state="validateFunctions('requiderValidator',addParentModel.name)" v-model="addParentModel.name" class="inputClasss"/>
        </td>
        <td>
        <b-input type="text" :state="validateFunctions('requiderValidator',addParentModel.surname)" v-model="addParentModel.surname"  class="inputClasss"/>
        </td>
        <td>
          <b-input type="text" v-model="addParentModel.fatherName"  class="inputClasss"/>
        </td>
        <td>
          <b-input type="date" v-model="addParentModel.birthYear"  class="inputClasss"/>
        </td>
        <td>
          <b-dropdown class="inputClasss" :text="addParentModel.sudimost" style="width: 90%" variant="light">
            <b-dropdown-item :selected="true" @click="changeSudimost('Ýok')" >Ýok</b-dropdown-item>
            <b-dropdown-item  @click="changeSudimost('Howa')">Howa</b-dropdown-item>
          </b-dropdown>
        </td>
      </tr>

      </tbody>
    </table>
    <hr>
    <table>
      <thead>
      <th>
        Doglan ýeri
      </th>
      <th>
        Işleýän ýeri
      </th>
      <th>
        Ýaşaýan ýeri
      </th>
      </thead>
      <tbody>
      <tr>
        <td>
          <b-form-textarea type="text" :state="validateFunctions('requiderValidator',addParentModel.birthPlace)" v-model="addParentModel.birthPlace"/>
        </td>
        <td>
          <b-form-textarea type="text" v-model="addParentModel.workingPlace" :state="validateFunctions('requiderValidator',addParentModel.workingPlace)"/>
        </td>
        <td>
          <b-form-textarea type="text" v-model="addParentModel.yashayanYeri" :state="validateFunctions('requiderValidator',addParentModel.yashayanYeri)" />
        </td>
      </tr>
      </tbody>
    </table>
    <div style="text-align: center;margin-top: 10px;">
      <b-row>
        <b-col md="4">
          <b-button variant="primary" @click="$emit('changeStep','step3',{update:false})">Yza</b-button>
        </b-col>
          <b-col md="4">
            <b-button variant="primary" @click="addParentActionHandler" >Goş</b-button>
          </b-col>
        <b-col md="4">
          <b-button variant="primary" @click="nextStep" >Indiki</b-button>
        </b-col>
      </b-row>


    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import parentComponent from "~/components/students/addstudent/parentComponent";
export default {
  components:{
    parentComponent
  },
  data(){
    return {
      addParentModel:{
      fatherName: "",
      name: "",
      surname: "",
      birthPlace: "",
      birthYear: "",
      yashayanYeri: "",
      workingPlace: "",
      sudimost: "",
      studentID: 0,
      parentstatusID: 0
      }
    }
  },
  methods:{
    ...mapActions({
      loadParentStatuses:'parents/loadParentStatuses',
      addParent:'parents/addStudentParent'
    }),
    detetedParent(index){
     this.$store.dispatch('parents/loadParents',localStorage['id'])
    },
    async addParentActionHandler(){
      this.addParentModel.studentID=this.currentId;
      if(this.addParentModel.parentstatusID===0){
        alert("Garyndaşlyk derejesini saýlaň");
        return;
      }
      this.$emit('changeIsLoading',true);
      let success=await this.addParent(this.addParentModel);
      if(success){
        this.addParentModel={
          fatherName: "",
          name: "",
          surname: "",
          birthPlace: "",
          birthYear: "",
          yashayanYeri: "",
          workingPlace: "",
          sudimost: "",
          studentID: 0,
          parentstatusID: 0
        }
      } else {
        alert("Ýalpyşlyk ýüze çykdy");
      }
      this.$emit('changeIsLoading',false);
    },
    nextStep() {
      console.log("emitted");
      this.$emit('changeStep', 'step5');
    },
    changeStatus(index){
      this.addParentModel.parentstatusID=index;
      },
    changeSudimost(status){
      this.addParentModel.sudimost=status;
    },
    validateFunctions(name, value) {
      const validators = this.$customValidators;
      return validators[name](value);
    },
  },
  computed:{
    ...mapGetters({
      parentStatus:'parents/getParentStatus',
      parents:'parents/getParents',
      currentId:'students/getCurrentId'
    }),

    parentStatusText(){
      if(this.addParentModel.parentstatusID){
        let text=this.parentStatus.find(x=>x.id===this.addParentModel.parentstatusID)['name'];
        return text;
      } else {
        return "Garyndaşlyk derejesi"
      }
    }
  },
  async mounted() {
    if(this.parentStatus.length===0){
      await this.loadParentStatuses();
    }
    await this.$store.dispatch('parents/loadParents',localStorage['id']);
  }
}
</script>

<style scoped>

table {
  width: 100%;
  padding: 10px;

}

th {
  padding: 10px;
  text-align: center;
  background-color: rgba(2, 2, 2, 0.04);
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

}

td {
  padding: 10px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.5);
  min-width: 200px;
}
</style>
